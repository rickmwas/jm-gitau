import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { CAMPAIGN_POSTS, CAMPAIGN_EVENTS } from '../lib/campaignData';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Campaign Database Seeding...');

  // 1. Seed Users
  const superAdminPassword = await bcrypt.hash('AdminPassword2027!', 10);
  const pressPassword = await bcrypt.hash('PressPassword2027!', 10);

  const superadmin = await prisma.user.upsert({
    where: { email: 'admin@jmgitau.co.ke' },
    update: {},
    create: {
      email: 'admin@jmgitau.co.ke',
      name: 'Hon. J.M. Gitau (SuperAdmin)',
      passwordHash: superAdminPassword,
      role: 'SUPERADMIN',
    },
  });

  const press = await prisma.user.upsert({
    where: { email: 'press@jmgitau.co.ke' },
    update: {},
    create: {
      email: 'press@jmgitau.co.ke',
      name: 'Campaign Press Desk',
      passwordHash: pressPassword,
      role: 'PRESS',
    },
  });

  console.log('✅ Default users created:');
  console.log('   - SUPERADMIN: admin@jmgitau.co.ke (Pass: AdminPassword2027!)');
  console.log('   - PRESS: press@jmgitau.co.ke (Pass: PressPassword2027!)');

  // 2. Seed Posts from campaignData.ts (top 15 posts)
  console.log('📦 Seeding initial Facebook posts...');
  for (const post of CAMPAIGN_POSTS.slice(0, 20)) {
    await prisma.post.upsert({
      where: { postId: post.post_id },
      update: {},
      create: {
        postId: post.post_id,
        date: post.date,
        category: post.category || 'General',
        message: post.message,
        slug: post.slug || `post-${post.post_id}`,
        isPublished: true,
        isFeatured: post.post_id === CAMPAIGN_POSTS[0].post_id,
        reactions: post.engagement?.reactions || 0,
        comments: post.engagement?.comments || 0,
        shares: post.engagement?.shares || 0,
        postUrl: post.post_url,
        videoUrl: post.video_url || null,
        assetsJson: JSON.stringify(post.assets || []),
      },
    });
  }

  // 3. Seed Events from campaignData.ts
  console.log('📅 Seeding initial Campaign Events...');
  for (const ev of CAMPAIGN_EVENTS) {
    await prisma.event.create({
      data: {
        id: ev.id,
        title: ev.title,
        date: ev.date,
        time: ev.time,
        location: ev.location,
        ward: ev.ward,
        type: ev.type,
        description: ev.description,
        status: 'upcoming',
      },
    }).catch(() => {}); // Ignore duplicate IDs if re-run
  }

  // 4. Seed Initial Sample Volunteers
  console.log('🤝 Seeding initial sample volunteers...');
  await prisma.volunteer.createMany({
    data: [
      {
        fullName: 'Peter Kamau',
        phone: '+254712345678',
        email: 'peter.k@gmail.com',
        ward: 'Viwanda',
        pollingStation: 'Naivasha Primary School',
        interestsJson: JSON.stringify(['Polling Agent', 'Youth Mobilization']),
        status: 'new',
      },
      {
        fullName: 'Grace Wanjiru',
        phone: '+254723456789',
        email: 'grace.w@gmail.com',
        ward: 'Mai Mahiu',
        pollingStation: 'Mai Mahiu High School',
        interestsJson: JSON.stringify(['Media & Communications']),
        status: 'contacted',
      },
      {
        fullName: 'Samuel Njoroge',
        phone: '+254734567890',
        email: 'samuel.n@gmail.com',
        ward: 'Olkaria',
        pollingStation: 'Olkaria Secondary',
        interestsJson: JSON.stringify(['Door to Door Campaign']),
        status: 'assigned',
      },
    ],
  }).catch(() => {});

  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
