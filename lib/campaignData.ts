// Standalone Campaign Data for Hon. Jane Kihara / J.M. Gitau - Naivasha MP 2027

export const SITE = {
  candidateName: "J.M. Gitau",
  candidateFull: "J.M. Gitau",
  constituency: "Naivasha Constituency",
  party: "DCP",
  partyFull: "Democracy for the Citizens Party",
  slogan: "Skiza Wakenya • Skiza Ground",
  electionYear: "2027",
  tagline: "Listening to Naivasha. Thinking beyond today.",
};

export const SOCIAL_LINKS = [
  { label: "Facebook", url: "https://www.facebook.com/JMGitauNaivashaMP/", handle: "@JMGitauNaivashaMP" },
];


export interface CampaignPost {
  post_id: string;
  date: string;
  created_at: string;
  category: string;
  message: string;
  slug: string;
  engagement: {
    reactions: number;
    comments: number;
    shares: number;
  };
  post_url: string;
  video_url?: string | null;
  assets: Array<{
    asset_id: string;
    post_id: string;
    file_hash: string;
    original_url?: string;
    dimensions: { width: number; height: number };
    paths: {
      raw: string;
      web: string;
      thumbnail: string;
    };
  }>;
}

export interface AgendaPillar {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface WardInfo {
  id: string;
  name: string;
  slug: string;
  representative: string;
  population: string;
  keyProjects: string[];
  description: string;
}

export interface CampaignEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  ward: string;
  type: string;
  time: string;
  description: string;
}

export const CAMPAIGN_POSTS: CampaignPost[] = [
  {
    "post_id": "1563591385781111",
    "date": "2026-08-19",
    "created_at": "2026-08-19T14:33:01Z",
    "category": "Church & Community",
    "message": "Today, I joined family, friends, and relatives of the late Mzee Peter Kinyanjui of Sero Moi Ndabi, Maiela Ward, to stand with them during this difficult moment.\n\nMzee Peter Kinyanjui was a respected resident and community member who served as an area representative in Maiela Ward. His contribution to the community and the relationships he built with those around him will not be forgotten.\n\nI extend my heartfelt condolences to the family, friends, and the entire Sero Moi Ndabi community. May God grant you strength, comfort, and peace during this difficult time.\n\nRest in peace, Mzee Peter Kinyanjui. Your legacy lives on. ️\n\nJM Gitau\nNaivasha Constituency MP 2027\n\n#JMGitau2027 #MaielaWard #SeroMoiNdabi #RestInPeace #ServingThePeople",
    "engagement": {
      "reactions": 51,
      "comments": 18,
      "shares": 10
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02HXbUB3RWURRdEZX7WCPyKuFNBKZ6L2hkpAfAMYxUeLMvwYjoZB9N6bQRRFypMgW6l",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-19_1563591385781111_01",
        "post_id": "1563591385781111",
        "file_hash": "d7b36d8f0f7eca12d1ed6e4bb1e72cab2de517ad8f8ee0c1882a91308f696086",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/777824628_1563590972447819_8474317374201225970_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PjiDS-182ioQ7kNvwGUCcz1&_nc_oc=AdpIEagF2X4kk1WtbXjlYeH8aY_VwYZpu7ymKtLykGE9I_BHVW7fpBl0Inp8Xf-xQj2rFrCgK1gmDpp5bUPkEq1l&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQGcXR4QLCSKDvDr5Bj8IdIv82oNChL1cJ8fdILwU2KFyg&oe=6A8F8455",
        "paths": {
          "raw": "assets/raw/2026-08-19_1563591385781111_01.jpg",
          "web": "assets/web/images/2026-08-19_1563591385781111_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-19_1563591385781111_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-19_1563591385781111_02",
        "post_id": "1563591385781111",
        "file_hash": "f5a4c2996260b933d27cafc1a1d193933a214ce59dae571f3f2122f651ba05e9",
        "dimensions": {
          "width": 393,
          "height": 590
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/777208482_1563591042447812_4077046483024802451_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sjBQPz7deMAQ7kNvwEPGQNc&_nc_oc=AdqblNLpZx56RuGpGMLC-7EnJc4ucMjBGeam5JbpEaqGO6_v3cRQihFEDcTjGt6H6Mw_b1KjZL5VtxIy5Qoz4h_y&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQGmMwk7JW-A5gv7-wf2CerPcep2AMejT-D5CU-TucI-tA&oe=6A8F9478",
        "paths": {
          "raw": "assets/raw/2026-08-19_1563591385781111_02.jpg",
          "web": "assets/web/images/2026-08-19_1563591385781111_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-19_1563591385781111_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-19_1563591385781111_03",
        "post_id": "1563591385781111",
        "file_hash": "79b11a962248a197a025b9f9cd895bff9e2d2320f8ae6c2bc4eca6e6dc2985c9",
        "dimensions": {
          "width": 393,
          "height": 590
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/778034244_1563591092447807_8710012501449133526_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bLwGhQsV7yMQ7kNvwHZfPle&_nc_oc=Adq4AbeYHqjXi7O96pPmYU4iEXY_WK1GdfRUvyXydhCxnhvK7Ip7LRPBuKZTcWK0HLGaGJuzAd5xKAEMqWKf7cdh&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQGvHhywhYQXfbxYE_CHTNsmQF0bG4GCRU5Cf-n0uWGJJQ&oe=6A8FAA15",
        "paths": {
          "raw": "assets/raw/2026-08-19_1563591385781111_03.jpg",
          "web": "assets/web/images/2026-08-19_1563591385781111_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-19_1563591385781111_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-19_1563591385781111_04",
        "post_id": "1563591385781111",
        "file_hash": "46ca9dcb1a1d669041768b2a972f6381348d35104c27af365e417c6e3bd32cfc",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/778755861_1563591139114469_2910496330398765853_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hFIWlrE4OvoQ7kNvwGvMRxi&_nc_oc=AdrnTNS9ThHSnLeV1xUElMzu5-nFzy5u6bP26YtGQucc5uFfdbdGV0bLVw6awhkXLw8swLunK5OiSUP3WPMFkaGR&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQFrZyXGpmtRRfYf5kgu2NCdUOm1vvNrzyGoSNjxKK9w0w&oe=6A8F915F",
        "paths": {
          "raw": "assets/raw/2026-08-19_1563591385781111_04.jpg",
          "web": "assets/web/images/2026-08-19_1563591385781111_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-19_1563591385781111_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-19_1563591385781111_05",
        "post_id": "1563591385781111",
        "file_hash": "a05133eb6d649af62a867efaf4e9795c2a9c400b1c0cc06b408d42041a89418f",
        "dimensions": {
          "width": 590,
          "height": 395
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/778310833_1563591249114458_7443235735648575444_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=glD8GP_Bi0MQ7kNvwFQQyZ0&_nc_oc=AdqiAZJpShZbL7kxwibcreY8_XRSINMkK0I-3buyqh9iEkhXkS-vuLZwMPuqD_v3PyeZD5Su_o_heFQ1Qe02kB77&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQG4W6ueeD39CsCkH1lW4yloQ0jTUsDtxyuGvtplHdfw7A&oe=6A8FAEEA",
        "paths": {
          "raw": "assets/raw/2026-08-19_1563591385781111_05.jpg",
          "web": "assets/web/images/2026-08-19_1563591385781111_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-19_1563591385781111_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-19-today--i-joined-family--friend-781111"
  },
  {
    "post_id": "1560428656097384",
    "date": "2026-08-16",
    "created_at": "2026-08-16T07:09:51Z",
    "category": "Church & Community",
    "message": "Blessed Sunday, Naivasha! \n\nMay God bless our families, strengthen us, and fill our hearts with peace, hope, and renewed faith.\n\nHave a blessed and peaceful Sunday. \n\n#JMGitau2027 #Naivasha #BlessedSunday",
    "engagement": {
      "reactions": 80,
      "comments": 46,
      "shares": 2
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid029DDPm6Q5hzqL2BAo9Xdrkm8R28LjG4Z2fHkiGSBkARe7h1v6MzQJZEM6iHd1A3tKl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-16_1560428656097384_01",
        "post_id": "1560428656097384",
        "file_hash": "47ad00eabebe480a21afdce30329f803b66d83c52a34cda4ef740ef666c97775",
        "dimensions": {
          "width": 526,
          "height": 789
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/774726857_1560428629430720_6380417928809473375_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dX0ekR0NBp8Q7kNvwGzFx7U&_nc_oc=AdrfAmNi-jYDQsV5eZ8mB569SiveTGyvFYA2l4xdKCuO42puM17pv6Rzdz1JxrP9LM88AJcOfHLziwWmz2KaPOM2&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQEHC0b1ZluwfVarBr_P6QteRVGu2u5sydFxE3dg0MbR0A&oe=6A8F9553",
        "paths": {
          "raw": "assets/raw/2026-08-16_1560428656097384_01.jpg",
          "web": "assets/web/images/2026-08-16_1560428656097384_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-16_1560428656097384_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-16-blessed-sunday--naivasha----ma-097384"
  },
  {
    "post_id": "1559966506143599",
    "date": "2026-08-15",
    "created_at": "2026-08-15T17:41:30Z",
    "category": "Press & Statements",
    "message": "H.E. Rigathi Gachagua, EGH Naivasha imeongea ",
    "engagement": {
      "reactions": 50,
      "comments": 15,
      "shares": 0
    },
    "post_url": "https://www.facebook.com/reel/1822259605799133/",
    "video_url": "https://www.facebook.com/reel/1822259605799133/",
    "assets": [
      {
        "asset_id": "2026-08-15_1559966506143599_01",
        "post_id": "1559966506143599",
        "file_hash": "a739b2b0ccfa9fc12c7d190b319545b5d4dfa99c9ee2628f27c78d19531ed047",
        "dimensions": {
          "width": 526,
          "height": 296
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t15.5256-10/777823968_2056703341606164_7057862819029034097_n.jpg?stp=dst-jpg_s526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5fad0e&_nc_ohc=qO1CFMQi--wQ7kNvwEc6eXZ&_nc_oc=AdqzAEj4XGPeJRVBDvkxlOMGk9Vi_GEooAKJbgmBf9KmvmelLAaZH2P8aewys0R7Jnv1JTtJfoogTE689tjd3T_j&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Fy1b58Y6yReXaGV9EHSMpg&_nc_ss=73289&oh=00_AQG4x03HSU_GRsrQuiBeumClsOxMZla--TWI2awhnb01sQ&oe=6A8F9D00",
        "paths": {
          "raw": "assets/raw/2026-08-15_1559966506143599_01.jpg",
          "web": "assets/web/images/2026-08-15_1559966506143599_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-15_1559966506143599_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-15-h-e--rigathi-gachagua--egh-nai-143599"
  },
  {
    "post_id": "1559935762813340",
    "date": "2026-08-15",
    "created_at": "2026-08-15T16:55:25Z",
    "category": "Church & Community",
    "message": "I join other leaders, the clergy, the congregation, family, friends, and the wider Naivasha community in mourning the passing of Bishop Cosmas Kinyanjui David of Victory World Outreach Church, Naivasha.\n\nMy heartfelt condolences go out to his family, the entire church community, and all those whose lives he touched through his ministry and service.\n\nMay God grant the bereaved family strength, comfort, and peace during this difficult time.\n\nMay his soul rest in eternal peace. ️\n\n#RestInPeace\n#BishopCosmasKinyanjui\n#Naivasha\n#ServingThePeople",
    "engagement": {
      "reactions": 23,
      "comments": 7,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid029t6Lc1SkN6awW2D3vGnV2h1uKD4K2i9cxHTrRyng9gHVoBz7imeGX4NqWBgsHoeRl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-15_1559935762813340_01",
        "post_id": "1559935762813340",
        "file_hash": "ff8ccbf24698068da88560dadda9a51b873d6ec3d388a9905794f277e41778ba",
        "dimensions": {
          "width": 332,
          "height": 590
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/774513214_1559935709480012_4472874730850336011_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eIBpDms7wqcQ7kNvwEEB6CT&_nc_oc=Adpm1HrwFNDTySMKk15Gsk13LE-k_Lo4iNE216vDi-2KY_HM1QQxhZj1FRk8jlhKN6QvNgWWc99WrO4FizLeBTm5&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQEZRUr7pOzug8j8kaS1OD0uZ0ilL2znlqsN58714UUkQw&oe=6A8F9EA3",
        "paths": {
          "raw": "assets/raw/2026-08-15_1559935762813340_01.jpg",
          "web": "assets/web/images/2026-08-15_1559935762813340_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-15_1559935762813340_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-15_1559935762813340_02",
        "post_id": "1559935762813340",
        "file_hash": "87241e259395da9e5816d88fc3bf3a7998daee3bbb76cfafd34ad5bc053923b0",
        "dimensions": {
          "width": 417,
          "height": 589
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/774640897_1559935739480009_7216909986983796256_n.jpg?stp=dst-jpg_p417x417_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cp_mNLwd0lwQ7kNvwEWuH5O&_nc_oc=AdoCu2yEEEPYAVOrUrXJpxLGzshUPX8X37jbaVm_sz5D3LH6S8FxCn5svkjt6wi35lFaq9X2S8rx_0S7cURX1n0_&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQGpysGw_TqkZ-YyMTY9IbLNXIUpFBJFLnU8XPwPqV_w-w&oe=6A8F91AF",
        "paths": {
          "raw": "assets/raw/2026-08-15_1559935762813340_02.jpg",
          "web": "assets/web/images/2026-08-15_1559935762813340_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-15_1559935762813340_02_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-15-i-join-other-leaders--the-cler-813340"
  },
  {
    "post_id": "1558895482917368",
    "date": "2026-08-14",
    "created_at": "2026-08-14T14:54:12Z",
    "category": "Campaign Rallies",
    "message": "THANK YOU, NAIVASHA! \n\nMy people of Naivasha, asanteni sana for the overwhelming love, energy and support you showed us today. Your reception has spoken loudly — Naivasha is ready! \n\nNawapenda pia, and I deeply appreciate every one of you who came out in large numbers to stand with us.\n\nA special thank you to H.E. Rigathi Gachagua for visiting Naivasha and engaging with our people. This is the beginning of a new chapter, and together, we are building the Naivasha we deserve.\n\nNaivasha tuko pamoja!\nNaivasha ni DCP! \nHon. JM Gitau Naivasha MP 2027 \n\nMbele pamoja! ",
    "engagement": {
      "reactions": 58,
      "comments": 43,
      "shares": 13
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0rJHjQjNP67RAfbRgSX5vSapEv8gEeyaAaNHHFyV5Y4MWsGrVrJxhK6X4hLi2Kcvhl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-14_1558895482917368_01",
        "post_id": "1558895482917368",
        "file_hash": "21da06b08dd2edd5ca1623698244a3f4127e54155a4286e4b8abb530d4bdb614",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/774797807_1558894229584160_5387108391713240710_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wi-ML9RthCIQ7kNvwFKHfw9&_nc_oc=Adqf5G5THmHpDH4Eau39HrhB_3T190m2pKcoqrIRi7zFQk8uIjSW6WGFdF-dCU_E8JnvER8SYFEY1v0JcXHVzcG2&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQH9ijjK0ERSRjM5yv5dapT8ZcXAezHFhKVPeJOts_4nQw&oe=6A8FB83D",
        "paths": {
          "raw": "assets/raw/2026-08-14_1558895482917368_01.jpg",
          "web": "assets/web/images/2026-08-14_1558895482917368_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-14_1558895482917368_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-14_1558895482917368_02",
        "post_id": "1558895482917368",
        "file_hash": "e2b8f15329d1cfbfb92341ffda813355b91266c3cfde634ac7234e31e28bb8ba",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/774149195_1558894339584149_7230271247997686062_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UClUEFT1I5UQ7kNvwG71uJL&_nc_oc=AdqNu80pUNRbC7ImFOa5L8t0ERHO6G_vvtI7otRBOIA8JtRotq57rERDfWRhR4PM-lhx5riOgPsypd1fV4Y94gY-&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQEXnCFzYwvYe2UaxQYhYAI-9mi7Uq84Mh-oRnWpX9wFsw&oe=6A8F918E",
        "paths": {
          "raw": "assets/raw/2026-08-14_1558895482917368_02.jpg",
          "web": "assets/web/images/2026-08-14_1558895482917368_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-14_1558895482917368_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-14_1558895482917368_03",
        "post_id": "1558895482917368",
        "file_hash": "8e683c4d624a7d0bb00df5b0917729619998f41c48e74c92e6a7ee16422166b4",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/774597450_1558894456250804_5624370447347825224_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0w6DZJN8TP8Q7kNvwFAtD5h&_nc_oc=AdpslVvic1xAoP2hT_KyU0rVvVolJ9wNVsFP6gqjGJAITHHGOQ0WOQ8SwgDd-Pn3HJpdoY_SkVbI65iokiO-vYqM&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQH9pQdrSH9VdsKUX9IcRpUH0Vb5r5HD73_XvLN9bnXlmQ&oe=6A8FB107",
        "paths": {
          "raw": "assets/raw/2026-08-14_1558895482917368_03.jpg",
          "web": "assets/web/images/2026-08-14_1558895482917368_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-14_1558895482917368_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-14_1558895482917368_04",
        "post_id": "1558895482917368",
        "file_hash": "34dabf59d75ee2c2c718317631bd11fa1d122b532dfe7c4eae5cb6489d623576",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/774469263_1558894572917459_3298599361003770505_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RCAsF3p6ndoQ7kNvwH9ncVk&_nc_oc=AdouilZCwl8RYXFUtRMiKmcMI1szIzoIdIFCYT4Rp8wFigFx1HWNwQw2CGXAvuhQt8-ecpONc4KrX3ilYutVFio1&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQHbDarXvUd576HGzkjtTD9ZiusWRVtMORLEagB9jUVJQQ&oe=6A8FB87D",
        "paths": {
          "raw": "assets/raw/2026-08-14_1558895482917368_04.jpg",
          "web": "assets/web/images/2026-08-14_1558895482917368_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-14_1558895482917368_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-14_1558895482917368_05",
        "post_id": "1558895482917368",
        "file_hash": "71d0350cc2ae9aa94cda149de9c970810590835fd81744b7384fded30aed120f",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/774382390_1558894646250785_2967871692642329710_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8y4Nfx5SZu0Q7kNvwGLRvIH&_nc_oc=Adovep4aOp9OGE4TeWs3eyLw3-XPP_-BE0xKLuRyGfHt96IDt9cCyMfHKbsmMLnJBGhVf4b-FqkQi6jbKxBIRjQR&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQGk6sVkl8ZyVJguk5Zg6tEFbsghXw50fW2KZr9qGmkr0g&oe=6A8F98E1",
        "paths": {
          "raw": "assets/raw/2026-08-14_1558895482917368_05.jpg",
          "web": "assets/web/images/2026-08-14_1558895482917368_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-14_1558895482917368_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-14-thank-you--naivasha----my-peop-917368"
  },
  {
    "post_id": "1557570223049894",
    "date": "2026-08-13",
    "created_at": "2026-08-13T06:17:29Z",
    "category": "Press & Statements",
    "message": "NI KESHO NAIVASHA! \n\nKesho, 14TH AUGUST, tunafungua milango ya Naivasha kumkaribisha kwa heshima na shangwe H.E. RIGATHI GACHAGUA. \n\nNaivasha iko tayari. Watu wako tayari.\nUjumbe wa Naivasha ni mmoja: NAIVASHA NI DCP! ❤️\n\nKaribu Naivasha, H.E. Rigathi Gachagua.\nTushirikiane, tusikilizane na tusonge mbele pamoja.\n\nHon. JM Gitau Naivasha MP 2027 \nMP Naivasha Constituency 2027\n\n NAIVASHA NI DCP! ",
    "engagement": {
      "reactions": 58,
      "comments": 33,
      "shares": 5
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0DtvtDKSR5geAjgWysys3NUD4hm6uGGQk7MBMqkdDg58CJiwLMYrVMV9rgPSpECYHl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-13_1557570223049894_01",
        "post_id": "1557570223049894",
        "file_hash": "6cc81e85f55f24269e752c02a620bbfe9429a6ca485761f940a8eab895d23925",
        "dimensions": {
          "width": 526,
          "height": 701
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/770688420_1557570179716565_4542926893249383626_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4AIA0Ap_SOsQ7kNvwGOLqpp&_nc_oc=AdokAgZaWH6kkckVDGSeLkfrYiQ12lgeRqhJEOTSNai4n3q-wHx3DlBeWV0Evuh-YX0SN4cI1qhvpQ283aO_gqsP&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=wYMHPiZXEZw12wKBYNHSMg&_nc_ss=73289&oh=00_AQEMfLDq55Uqwg_SvS7nnRDCmbjNqx7_81XQ7MKzA9oS1g&oe=6A8FA743",
        "paths": {
          "raw": "assets/raw/2026-08-13_1557570223049894_01.jpg",
          "web": "assets/web/images/2026-08-13_1557570223049894_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-13_1557570223049894_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-13-ni-kesho-naivasha----kesho--14-049894"
  },
  {
    "post_id": "1554701720003411",
    "date": "2026-08-10",
    "created_at": "2026-08-10T05:29:25Z",
    "category": "Church & Community",
    "message": "Naivasha deserves better.\n\nOur people deserve proper access roads, reliable clean drinking water, quality healthcare, better schools, and essential services that improve everyday life.\n\nDuring my engagement with residents of Banana in Maai Mahiu Ward, I listened to your concerns and witnessed the challenges you continue to face. Your voices matter, and your needs deserve attention.\n\nAs we look towards 2027, I remain committed to championing practical solutions and inclusive development that reaches every community across Naivasha.\n\nYour voice matters. Your needs are my priority.\n\nJM Gitau\nNaivasha MP 2027\n\n#JMGitau2027\n#NaivashaDecides\n#LeadershipThatListens\n#DevelopmentForAll\n#MaaiMahiuWard",
    "engagement": {
      "reactions": 37,
      "comments": 15,
      "shares": 3
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0GRpPX9CPaVpJim6fpsM68uXgKJYMwRadVLKYHCgaCbztGPQPFdCEQSUEs8nN67QKl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-10_1554701720003411_01",
        "post_id": "1554701720003411",
        "file_hash": "b0364691551cd8cc0a0b6cc73aae5d162f601abcf3d4202513b4f0d9fb6005ad",
        "dimensions": {
          "width": 590,
          "height": 394
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/771694538_1554701220003461_4427853964335028971_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h9LXDHSxx9UQ7kNvwH7GRZD&_nc_oc=Adp1Vl2Id6MP0EFvSXtli5jOXtof5tjtgsk8VXwHAaUkQ9KAynIGaFsCZRC4zhbqpRCy6CRPhsS_alU1XZ5Zan5B&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQGIc82hLN4z_kordcC_HIcLNKbSo0wBryIhKECSCFU5Rg&oe=6A8F987B",
        "paths": {
          "raw": "assets/raw/2026-08-10_1554701720003411_01.jpg",
          "web": "assets/web/images/2026-08-10_1554701720003411_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-10_1554701720003411_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-10_1554701720003411_02",
        "post_id": "1554701720003411",
        "file_hash": "0e2af6d82dfa905711f60a11695ffd92dbcbe221cdf786699e9a631bdc4010ed",
        "dimensions": {
          "width": 590,
          "height": 394
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/771678008_1554701256670124_1325961585432824061_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uxF4e_uZi8gQ7kNvwHPgtuO&_nc_oc=AdqXMY3NS-j05KrhNUh_dQnP1hrSTGseCtw3_6woRQBhuf8nTywNi6KeFvmcf_wd0nbb-3l_33iKccgtOwrW9O8v&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQFjXkAsDYR5tNKvx3DuD582h2_aZFcO4TbNTYO-F_DJMg&oe=6A8F8AC8",
        "paths": {
          "raw": "assets/raw/2026-08-10_1554701720003411_02.jpg",
          "web": "assets/web/images/2026-08-10_1554701720003411_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-10_1554701720003411_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-10_1554701720003411_03",
        "post_id": "1554701720003411",
        "file_hash": "8d5dc89556898a1696dfccd614ea884f1adf31df8648aac7172e3c20d76a0e02",
        "dimensions": {
          "width": 590,
          "height": 394
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/771677999_1554701306670119_2783591520204312997_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jZj27WEKW6QQ7kNvwF6-wlS&_nc_oc=Adqsb61U_clmz3wmMDAC7rPyiY3JOlvKU0rTqvkp2LyKpolO_qTobodMw9HIQujvETaRDqc-yRrrw47TFkd2ui4Q&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQF0ToYTpV11BkS8FNhuwQHoCo4lVvnTPRXjYnhb4hDjcw&oe=6A8F9A4A",
        "paths": {
          "raw": "assets/raw/2026-08-10_1554701720003411_03.jpg",
          "web": "assets/web/images/2026-08-10_1554701720003411_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-10_1554701720003411_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-10_1554701720003411_04",
        "post_id": "1554701720003411",
        "file_hash": "8ab1b42e81792e93b69692386c8e5b1ca61bff4c5e05291e79bfaf40a29fa63c",
        "dimensions": {
          "width": 590,
          "height": 394
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/771983532_1554701350003448_2950228290808439377_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Xd3ANwnf-w8Q7kNvwEpkT2b&_nc_oc=AdpbQfeI9__Mih2gsXTzDS1Mj7UUQybKq9FxVR2GR7nPxbzw6SB_8NZdJABDi5PJYfUUQHCCQZO-T_PGDezhb63G&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQG8PvDQfIwUa_Ym7s_-AspTd9AOBUkxZ2znpwC1aWYcbw&oe=6A8FA070",
        "paths": {
          "raw": "assets/raw/2026-08-10_1554701720003411_04.jpg",
          "web": "assets/web/images/2026-08-10_1554701720003411_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-10_1554701720003411_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-10_1554701720003411_05",
        "post_id": "1554701720003411",
        "file_hash": "0bc79afb8aa5283de7ff75ac6c4a0103686b8057ffd4b4826d48598bb64ff955",
        "dimensions": {
          "width": 590,
          "height": 394
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/771843856_1554701386670111_1262502099137655200_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9TttRHhmRRkQ7kNvwGFWhTA&_nc_oc=Adp6waHii49P3i8EaqEQ_j3JmZtJsjJtLWOoIytlVpipDMY5SC9nk7McFpKzdKn8Wv1a9EiB-njE3O5dD4-LPOfL&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQGjoJphHUPArsvLmLWUYAXXqa2ppvZIBkMIFSaNLiQCag&oe=6A8FAD7C",
        "paths": {
          "raw": "assets/raw/2026-08-10_1554701720003411_05.jpg",
          "web": "assets/web/images/2026-08-10_1554701720003411_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-10_1554701720003411_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-10-naivasha-deserves-better---our-003411"
  },
  {
    "post_id": "1554431996697050",
    "date": "2026-08-09",
    "created_at": "2026-08-09T20:47:37Z",
    "category": "Church & Community",
    "message": "I am deeply saddened by the passing of Samuel Karanja (WaKUI), my neighbour, childhood friend, father, brother, and a true servant of the Maai Mahiu community.\n\nSamuel dedicated his life to helping others and made a positive impact in the lives of many. His kindness, friendship, and commitment to serving the community will forever remain in our hearts.\n\nMy heartfelt condolences go out to his family, relatives, friends, and the entire Maai Mahiu community during this difficult time.\n\nMay God grant the family strength, comfort, and peace. May his legacy of kindness and service continue to inspire us.\n\nRest in peace, Karanja. Your memory will live on. ️\n\nJM Gitau\nNaivasha Constituency",
    "engagement": {
      "reactions": 125,
      "comments": 48,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0GXc6otCSnFbrFXzZASxd7wNfoTHmRNhQ4uVsDeaGLrXDMtDVo2xtQfUqfM6vNfdml",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-09_1554431996697050_01",
        "post_id": "1554431996697050",
        "file_hash": "7f173499a6ab76f52067b0543d15768e82945b861f3314b6f96f989d3d760818",
        "dimensions": {
          "width": 526,
          "height": 526
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/769692225_1554431976697052_8778891187308860814_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FcSfBWiW22wQ7kNvwHS4IyA&_nc_oc=AdoQseA-5K9tzEijHiV7QKY0BOQbnljkl7DK4EHHtx7edwOSJ_BxewtH9iX9luOCcPY-8WdK_AkBfX56Bbv-q8Qt&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQFQ3xA4ybjqHf2vXdlccSqyx1Ve4jTmuG5iGFvSZuCwEQ&oe=6A8FB985",
        "paths": {
          "raw": "assets/raw/2026-08-09_1554431996697050_01.jpg",
          "web": "assets/web/images/2026-08-09_1554431996697050_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-09_1554431996697050_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-09-i-am-deeply-saddened-by-the-pa-697050"
  },
  {
    "post_id": "1553972430076340",
    "date": "2026-08-09",
    "created_at": "2026-08-09T09:09:51Z",
    "category": "Church & Community",
    "message": "Blessed Sunday, Naivasha! \n\nAs we gather in our churches today, let us thank God for His blessings and pray for our families, our communities, and our beloved country Kenya.\n\nLet us pray for peace, unity, better leadership, opportunities for our youth, and a brighter future for our people.\n\nAs we look towards 2027, let us embrace leadership that listens, serves, and puts the interests of the people first.\n\nJM Gitau — Naivasha Constituency MP 2027\n\nGod bless Naivasha. God bless Kenya. \n\n#JMGitau2027\n#NaivashaDecides\n#LeadershipThatListens\n#BlessedSunday\n#TogetherWeCan",
    "engagement": {
      "reactions": 53,
      "comments": 32,
      "shares": 2
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02ni8iKDwnBhV7hqpM3ouCQ9vVP9fjkna6AP4yZ4pnacyEb7vEvMLJYCE37gbb3pZVl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-09_1553972430076340_01",
        "post_id": "1553972430076340",
        "file_hash": "a5b98829c5c71768f1de0938c27f2093573453ee0a519bd3901ade48127033ed",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/768941461_1553972350076348_5695670587190452958_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Oq10so5vpu8Q7kNvwF7xjIy&_nc_oc=AdqT6qFQ1Jscpd_PFd-Gwneg2NAllsRTN1qKN7vVpruxKa6IqRjeGbahVpHW3iKPOJvOfLhn1Hmplqj-ZDvm7kUs&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQGblIzYTtssQPYViCmSuhHWm5u7KBgsYrrKaAbQc5irHw&oe=6A8F9F8D",
        "paths": {
          "raw": "assets/raw/2026-08-09_1553972430076340_01.jpg",
          "web": "assets/web/images/2026-08-09_1553972430076340_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-09_1553972430076340_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-09_1553972430076340_02",
        "post_id": "1553972430076340",
        "file_hash": "a8cd0a7a279d07b2ca6a6cf092a38987e29c151e4088aaaa4010f24814f7e1fb",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/771983669_1553972403409676_1896920959621612767_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MsouKdjgHcEQ7kNvwEKjUrO&_nc_oc=AdoIZ91uT4An92vRaFxB4JPwS0gLiOqC25-DDaS6VwHbaf8ZIOD7eoXeirHTHfv9gV9-YBXiVVSw-nuSLF1ek2TL&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=kCMv35hgsDZm09EKTjhuFw&_nc_ss=73289&oh=00_AQE5-tvdBP_eg0KTtgXL4eKCSbi9bNOUDOz1BdYpQYIBRQ&oe=6A8F9A98",
        "paths": {
          "raw": "assets/raw/2026-08-09_1553972430076340_02.jpg",
          "web": "assets/web/images/2026-08-09_1553972430076340_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-09_1553972430076340_02_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-09-blessed-sunday--naivasha----as-076340"
  },
  {
    "post_id": "1553515230122060",
    "date": "2026-08-08",
    "created_at": "2026-08-08T19:55:55Z",
    "category": "Church & Community",
    "message": "Today, we laid to rest our brother Samwel Wainaina, also known as Kaitagon, who tragically lost his life in a road accident.\n\nMy heartfelt condolences go out to his family, friends, colleagues, and the entire bodaboda fraternity. May Almighty God comfort the bereaved family and grant them strength during this difficult time. May his soul rest in eternal peace. ️\n\nAs we mourn, I urge KeNHA and all relevant authorities to urgently address the safety concerns along the busy Naivasha Road near the Kijabe–Maai Mahiu junction, including proper warning signs and appropriate traffic-calming measures.\n\nThis is a high-risk section, and more needs to be done to protect bodaboda riders, pedestrians, and other road users.\n\nKaitagon's death should not be in vain. Let us act now to prevent further loss of lives.\n\nRest in peace, Kaitagon. Your life mattered, and your memory will live on. ️\n\n#RestInPeaceKaitagon\n#RoadSafety\n#Naivasha\n#KeNHA\n#BodabodaSafety\n#ServingThePeople\n#JMGitau",
    "engagement": {
      "reactions": 25,
      "comments": 14,
      "shares": 11
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02igRZ7Wp5UXTjtjP9QtdAC8muqBd2sWwYKfspPUvRX6B6UJba9uMhnYsznM1xDQPzl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-08_1553515230122060_01",
        "post_id": "1553515230122060",
        "file_hash": "fa83a4d21a23bb1a2096be6d29f7c7ac600b00da6ef4047ea6cc069e7f4db494",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/768145192_1553514933455423_1896525241093381038_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PuEurN7uedkQ7kNvwE33s1F&_nc_oc=Adpeq5WxYVNrMbRbv34hIKbhpCRU2jaAhOgvsO-YD2YwbpOPdF1BGMP8HXCzVAMHXJOhm2EW3DjHGsp62M2FNz9_&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQHdiqRb2l8TZQdONV-zG4xOPGXmTnuYF-1JpQWba0Un4w&oe=6A8F8F34",
        "paths": {
          "raw": "assets/raw/2026-08-08_1553515230122060_01.jpg",
          "web": "assets/web/images/2026-08-08_1553515230122060_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-08_1553515230122060_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-08_1553515230122060_02",
        "post_id": "1553515230122060",
        "file_hash": "ea92aeb1b185a7ac6e96f376a9eb7d1e01bd0ac96c79eb9d156eb49ed03d7c79",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/768310512_1553514973455419_5216936175915665570_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z7Qmqe-2D2UQ7kNvwEQErCL&_nc_oc=AdrJRFmJnUwwaf0z3y7cTbOckSXWkpvo_MhyUz8PhHzcS3tbytN4x7_WcFgGA___jgx2js7XcFlcClSiS68twYXr&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQEd9XFtTKYbL8gVUcuhHAKeGVUEZEZ76JO1ptKDhe6q6g&oe=6A8F9381",
        "paths": {
          "raw": "assets/raw/2026-08-08_1553515230122060_02.jpg",
          "web": "assets/web/images/2026-08-08_1553515230122060_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-08_1553515230122060_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-08_1553515230122060_03",
        "post_id": "1553515230122060",
        "file_hash": "5568a80a70c381514619fa46633ba8b2f722e38613a2cc33b0b4844f0e19f02f",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/771739765_1553515003455416_276146415279881776_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KKpiNr62YdkQ7kNvwHI8Fgx&_nc_oc=Adq1pmZzeoxMGjm3kNzEJZNQHP1rZ89vCcB4-OFEvb2rkArnwkQOZSAMeK2UtCfxU8dDIoh5DBjTY6WvAAm1AIhR&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQG_nUgPY7CbISF00j4yOOq2kO3Her8rZQRAyVoxhB1inA&oe=6A8FAFD8",
        "paths": {
          "raw": "assets/raw/2026-08-08_1553515230122060_03.jpg",
          "web": "assets/web/images/2026-08-08_1553515230122060_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-08_1553515230122060_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-08_1553515230122060_04",
        "post_id": "1553515230122060",
        "file_hash": "dcf9d85c1e17c9f6ef430e676b4ec166708f0d3669d5ddd80321d216f078329d",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/770767021_1553515026788747_8065634798770685884_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OzFT0E4NRM4Q7kNvwFXJ_er&_nc_oc=AdoB42d_-StTHCMqSlSB3OLgpYAvcS60eh-dOxdJ2aWgj9ZMHDd3ydSymOEmPO1_FtYCInrzGMfGOWglBeIMUH-f&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQF_Og11OIAx7Xff2l_cyYLXbsNJO4Rq2xWYx1M1DwnZOQ&oe=6A8FAED4",
        "paths": {
          "raw": "assets/raw/2026-08-08_1553515230122060_04.jpg",
          "web": "assets/web/images/2026-08-08_1553515230122060_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-08_1553515230122060_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-08_1553515230122060_05",
        "post_id": "1553515230122060",
        "file_hash": "3e778210e0f26040ffdeac968a1cd06fa0e993f8cdf0816c5b3bcd87c13b4f6e",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/767033096_1553515073455409_5773196308882344330_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EwvDIREe-p0Q7kNvwHnUt9B&_nc_oc=AdoPTfu-8ioY9p1Hs4TOv9ObdhbJJt2qK0T9cOC2ToBmnzXmG2gxnSR_3qtU3K0ohy9gku0AFCCQT-fXhigNhac5&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQFx0t2fRE8Ib9h2RtbWL8Ksw4LbYJgzyWx3SICmv-Mvag&oe=6A8F9239",
        "paths": {
          "raw": "assets/raw/2026-08-08_1553515230122060_05.jpg",
          "web": "assets/web/images/2026-08-08_1553515230122060_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-08_1553515230122060_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-08-today--we-laid-to-rest-our-bro-122060"
  },
  {
    "post_id": "1552581446882105",
    "date": "2026-08-07",
    "created_at": "2026-08-07T17:07:00Z",
    "category": "Development & Projects",
    "message": "Karibu Naivasha, H.E. Rigathi Gachagua, EGH!\n\nOn 14th August 2026, the people of Naivasha warmly welcome you to our constituency.\n\nYour visit is an opportunity to engage with the people, listen to their aspirations, and reaffirm our shared commitment to unity, development, and a better future for all.\n\nWe look forward to hosting you in the Home of Itungati. Karibu sana, and may your visit be fruitful and memorable.\n\nKaribu Naivasha!\n\n#RiggyGNaivashaTour\n#WelcomeToNaivasha\n#HomeOfItungati\n#Naivasha\n#TogetherWeCan",
    "engagement": {
      "reactions": 36,
      "comments": 26,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid05pCZDU7iX6vkqNr3jAMJq5ucKkKnj2rd6F4BH4nQ6vMLzajXNwAqYRkEkkfwjGaJl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-07_1552581446882105_01",
        "post_id": "1552581446882105",
        "file_hash": "3e33d38582ba33c27353c9103a5d5b1d8a36ca0a0ac5e1aa95bc1dd306358bd4",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/765872476_1552581143548802_7012206900475542508_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AaeYdfZypJAQ7kNvwEj0Nx4&_nc_oc=AdqBJk2Y2PJ3kKtMk2MdpqspIQrXJAsFONO8k-tsuYnKKs6m1Bai5rOz55FNhJTS48H06MqPm0CSs6639FoFxGwZ&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQHdt5Lnk_1Gmw8PFV7F6V6p9Be7vmpTUCeK-Oxm7o6HVQ&oe=6A8FACD2",
        "paths": {
          "raw": "assets/raw/2026-08-07_1552581446882105_01.jpg",
          "web": "assets/web/images/2026-08-07_1552581446882105_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-07_1552581446882105_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-07_1552581446882105_02",
        "post_id": "1552581446882105",
        "file_hash": "8eb41754c16920578bc981cddb55f84ee06ed25cf4f1bb9afdc21e65436a76ae",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/768284871_1552581200215463_1262123540526151198_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mu-Wp_uZK1IQ7kNvwFLC56p&_nc_oc=AdqmNXp2R1IbLBcRmUulabVghTPfrWWkfLYytiZvjaLfLwfVgU9mKx2bIvgfMSc-D09F5xaULd1XZi5OSTaQiK27&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQE2xK4LjD7_Mt-hKy7EsJMVXnr73YIc8dzqwH2SkiMgtw&oe=6A8FA406",
        "paths": {
          "raw": "assets/raw/2026-08-07_1552581446882105_02.jpg",
          "web": "assets/web/images/2026-08-07_1552581446882105_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-07_1552581446882105_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-07_1552581446882105_03",
        "post_id": "1552581446882105",
        "file_hash": "8f356f3edfd4ef680667828a1754f2d4cafc43bf8186fe8f00284f851324f7d4",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/764953786_1552581276882122_1653205194338319000_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RZp0i6a6t3EQ7kNvwFvBJYW&_nc_oc=Adpl0S01U3U3mTVSTzeWqgUnfg8_zuu_BRauZUAclyLkQLuPnlKKFEI850LDgFkwsxZWnDweRD28brdTAU5AjKcy&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQHgBD2rewXD4xWd8r0Ns_sNlPGcirmqdaw0P1SWWdVq5g&oe=6A8FB84C",
        "paths": {
          "raw": "assets/raw/2026-08-07_1552581446882105_03.jpg",
          "web": "assets/web/images/2026-08-07_1552581446882105_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-07_1552581446882105_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-07_1552581446882105_04",
        "post_id": "1552581446882105",
        "file_hash": "fba0bca732c687cd2de4943e97ad32d19c4a90e326fcd1a3f2f29e6d7e708de7",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/766107203_1552581336882116_5909491035293775883_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LKFCpCkJS74Q7kNvwEMLVQK&_nc_oc=Adp7loaOIWqVdqGWKizVEM5q0IMncR_nOJucVbHxsL5cJgwr1YHk9XMB29teH4imhb_xCKDu6m2m05ODHNvu16qM&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQH2PTSGlDKsOpsyJDIFST4_74YRpHiU6kAFSaHTD6fIfw&oe=6A8F86B1",
        "paths": {
          "raw": "assets/raw/2026-08-07_1552581446882105_04.jpg",
          "web": "assets/web/images/2026-08-07_1552581446882105_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-07_1552581446882105_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-07_1552581446882105_05",
        "post_id": "1552581446882105",
        "file_hash": "983de1bdcf001707badd469f31f45e5d5ebcc068dbe2bb8c7227ea7abf2da575",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/767431385_1552581393548777_2234073781134338012_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YWLp-bbvJXcQ7kNvwHh3n-0&_nc_oc=Adqi4_w5dEtN4JVTZW6nEAkv8YPkS2nswsnc-Z10EC2gOgf_eTLnPtnea5z4AQNt6NBWPAtLCQZLo9BqWyPMhtWJ&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQGWrYjMSVDRD3gmsgo-_4qbavdOpWEmx7XVvnP4v441ww&oe=6A8F8A85",
        "paths": {
          "raw": "assets/raw/2026-08-07_1552581446882105_05.jpg",
          "web": "assets/web/images/2026-08-07_1552581446882105_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-07_1552581446882105_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-07-karibu-naivasha--h-e--rigathi-882105"
  },
  {
    "post_id": "1549360253870891",
    "date": "2026-08-04",
    "created_at": "2026-08-04T08:01:52Z",
    "category": "Development & Projects",
    "message": "Good Morning, Naivasha! \n\nA new day is a reminder that the future of our constituency is in our hands. For too long, our people have waited for better roads, more employment opportunities for our youth, quality healthcare, improved schools, and equal development across every ward.\n\nThe time has come to embrace leadership that listens, serves, and delivers.\n\nAs we move closer to 2027, let us choose unity, accountability, and development that benefits every resident of Naivasha. Together, we can build a constituency where every hardworking citizen has a fair opportunity to succeed.\n\nOur voices matter, and our choices will shape the future of generations to come.\n\nHave a blessed and productive day. \n\nNaivasha Kwanza. Development Kwanza. The Future is Now!\n\n— JM Gitau\nNaivasha Constituency MP Aspirant 2027\n\n#JMGitau2027\n#NaivashaKwanza\n#DevelopmentKwanza\n#LeadershipThatListens\n#TogetherWeCan",
    "engagement": {
      "reactions": 67,
      "comments": 27,
      "shares": 6
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid025vrt6cFoidxhkGUDyfHDrwu19crTLdiGuthuCLDvrpQe3mR4JUcWSNpwDP8ipx5ql",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-04_1549360253870891_01",
        "post_id": "1549360253870891",
        "file_hash": "1b70ffbe71dd9f036b4d224f392b9572684dd4da69bdc71aacea7bf4f5c41ed5",
        "dimensions": {
          "width": 526,
          "height": 274
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t45.1600-4/768465094_1553203313486585_2034828591847747082_n.jpg?stp=c0.389.1016.530a_cp0_dst-jpg_q75_s526x296_sh2.08_spS444_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f0a831&_nc_ohc=pXNz7SfuJ44Q7kNvwGqkIv4&_nc_oc=AdqcsWW7coTa02XSjEciCx3le05MRDNHbW5pbF2IuSzjPC6nba4lw5CtTYhVLBKXiRnLT8nI2LkmFShN7R6UFg4l&_nc_zt=1&_nc_ht=scontent-lga3-2.xx&_nc_gid=fEpSyKxwmtJuxdKVVYaM7A&_nc_ss=73289&oh=00_AQFRomSQ0bUZUm-akPICy9Nr5XCtQcx30_yjd6ZIBkKfng&oe=6A8FB4FD",
        "paths": {
          "raw": "assets/raw/2026-08-04_1549360253870891_01.jpg",
          "web": "assets/web/images/2026-08-04_1549360253870891_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-04_1549360253870891_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-04-good-morning--naivasha----a-ne-870891"
  },
  {
    "post_id": "1548424653964451",
    "date": "2026-08-03",
    "created_at": "2026-08-03T07:39:55Z",
    "category": "Church & Community",
    "message": "Yesterday, I had the privilege of joining the faithful of PEFA Church in Olkaria Ward, Naivasha Constituency, for a blessed time of worship and fellowship.\n\nI sincerely thank Pastor Francis Ouma, Bishop Alandwa, and the entire congregation for the warm welcome, love, and prayers. Your hospitality, faith, and unity were truly inspiring. May the Almighty God continue to bless your ministry and every family represented.\n\nAs we continue engaging and serving our people, may we remain guided by faith, love, and unity.\n\n“How good and pleasant it is when God’s people live together in unity!” — Psalm 133:1\n\nGod bless PEFA Church.\nGod bless Olkaria Ward.\nGod bless Naivasha Constituency. \n\nHon. JM Gitau\nNaivasha Constituency MP Candidate – 2027\n\n#JMGitau2027\n#LeadershipThatCares\n#OlkariaWard\n#FaithAndUnity\n#TogetherWeCan",
    "engagement": {
      "reactions": 59,
      "comments": 32,
      "shares": 11
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02ugeWnfqu2YVwSzrs14WpDJcBZ7xryrYKnQrzdZE2YFRwpXhi7H7ryWtsYejLxaAtl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-03_1548424653964451_01",
        "post_id": "1548424653964451",
        "file_hash": "7066ded637d3eee966036ecc6b27e3cda186c83621292ba19957ea4f6e231ce0",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/762780103_1548424090631174_8505770462237025519_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_WEDGgBSk3YQ7kNvwFt3u13&_nc_oc=AdpAQjIEIcbdEYLa6DG-u-L30Ivsp1kEVyZzFfNX2N6syCvJPftdEKOWPeAvx4R91sWgk7LFF8k6TaDuvHQFS2Tj&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQGOQ9sSpsKYT-RptUd6veLQLCtqrbg2a5BbbaMPv5X-8Q&oe=6A8FA4D7",
        "paths": {
          "raw": "assets/raw/2026-08-03_1548424653964451_01.jpg",
          "web": "assets/web/images/2026-08-03_1548424653964451_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-03_1548424653964451_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-03_1548424653964451_02",
        "post_id": "1548424653964451",
        "file_hash": "33a3c893c5c24fa112a6b983ff34f4af73c2cb6cbf2285546db803df8580248c",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/762831337_1548424130631170_8317525686644816765_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kFDBWX8K9Q8Q7kNvwHtlQ85&_nc_oc=Adq2NgfCe_RRT0MA08N5vfzrmSOzpx4aUACzGB3YjAdOmVK3sp_wsnaBRIchnPUXzJV6fhTlwEWYV3TG-dHUhWG8&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQFKl0fT65ieIGY3_V97pjnzqZZMy3aIbTn5EQjqSkIvPA&oe=6A8F95CD",
        "paths": {
          "raw": "assets/raw/2026-08-03_1548424653964451_02.jpg",
          "web": "assets/web/images/2026-08-03_1548424653964451_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-03_1548424653964451_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-03_1548424653964451_03",
        "post_id": "1548424653964451",
        "file_hash": "aaa88af204f34ed9001a3cb34809de81dacb1f3b602a080483214bd2a00bf13d",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/763050754_1548424187297831_4960735751829532325_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=i7n_M_PynKoQ7kNvwFJ4sPN&_nc_oc=AdrDCJMqY6uVKznKYk4-6l-tinO4JXtFxVUoKvF8kcT_J8zsBlPkMMsa-RYFg5ewrzIHp9w-0zgXVCmwwijWRUpd&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQEYNryhFB2lhNN8gaXD4AtNLqmB2oCkA_A9KU-s6mpUfg&oe=6A8F938F",
        "paths": {
          "raw": "assets/raw/2026-08-03_1548424653964451_03.jpg",
          "web": "assets/web/images/2026-08-03_1548424653964451_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-03_1548424653964451_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-03_1548424653964451_04",
        "post_id": "1548424653964451",
        "file_hash": "8182e7e8c8d18ef53b943afe5ddc413d87a012d129ef09dcc8f4c77c1fc0980b",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/761574141_1548424233964493_6396988707549432614_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oLhXUvlgQA8Q7kNvwETJgv7&_nc_oc=AdpUznKhoQM1ScxGYOxbBRZJ0-FH4KyZudXJlz0mmhGGflmv0oY7ZUtGYMZfNoNOMoNLod1b25XmndS1-tXRwls_&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQFklPKZaRxdcjnnC3wa2MZNZq744Jhykm30BxDEXjz3jw&oe=6A8FB7F7",
        "paths": {
          "raw": "assets/raw/2026-08-03_1548424653964451_04.jpg",
          "web": "assets/web/images/2026-08-03_1548424653964451_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-03_1548424653964451_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-08-03_1548424653964451_05",
        "post_id": "1548424653964451",
        "file_hash": "22132a00298437263627681882feabce8f2f40c688d638e3188e306132062571",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/763065141_1548424313964485_3560105419487832659_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CsFTUGJKROwQ7kNvwGF498h&_nc_oc=AdpaQ2VP3VmNF5kobwPR5Hn7o6IgX0SI5e9avcYa00xGX1rKhrJZ0L4gFZz_SqHFQV3eZHP0pGsbMkhIyjOVmSqK&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQFfpeFfuBuQQRvRoO22fpcUAqmCXhR9LSowIXNfO_MeIA&oe=6A8F889D",
        "paths": {
          "raw": "assets/raw/2026-08-03_1548424653964451_05.jpg",
          "web": "assets/web/images/2026-08-03_1548424653964451_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-03_1548424653964451_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-03-yesterday--i-had-the-privilege-964451"
  },
  {
    "post_id": "1546755094131407",
    "date": "2026-08-01",
    "created_at": "2026-08-01T09:59:05Z",
    "category": "Campaign Rallies",
    "message": "Happy New Month, Naivasha! \n\nAs we welcome the month of August, I extend my heartfelt wishes to every family across Naivasha. May this new month bring good health, peace, prosperity, and new opportunities.\n\nTogether, let us continue working towards a united, developed, and prosperous Naivasha, where every voice matters and every dream has an opportunity to grow.\n\nThank you for your continued support, trust, and encouragement. Wishing you all a blessed, peaceful, and fruitful month ahead.\n\nHappy New Month! \n\nJM Gitau\nMP Aspirant – Naivasha Constituency\n\n#HappyNewMonth\n#Naivasha\n#JMGitau\n#DCP\n#SkizaWakenya\n#TogetherWeCan",
    "engagement": {
      "reactions": 48,
      "comments": 40,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02azJNvP5dF8iFr8A1KmnXPrR64bdY5vP5z9ToH6aCvBCUaxDySGDj8h479kNCiktLl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-08-01_1546755094131407_01",
        "post_id": "1546755094131407",
        "file_hash": "af2ba8142556f8f7f44120b64b03c93605808976e112e31b9b9f84824991e362",
        "dimensions": {
          "width": 526,
          "height": 701
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/760000028_1546755067464743_2404890190310093972_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IkNI-3qu4OkQ7kNvwE4UUsa&_nc_oc=Adp90Q7Y9dqGxL3mitH8W7vg44G9ngIDJozzwvHxU94FPS9XhDZljm_nsKncI14rYU2k5r3ZmGTfMsqGK8hFUhmL&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQFPkutsYkNG6jgTyYaWN8BQf8RXQsK8bMS0nEPzCbsAwQ&oe=6A8FB35C",
        "paths": {
          "raw": "assets/raw/2026-08-01_1546755094131407_01.jpg",
          "web": "assets/web/images/2026-08-01_1546755094131407_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-08-01_1546755094131407_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-08-01-happy-new-month--naivasha----a-131407"
  },
  {
    "post_id": "1544038727736377",
    "date": "2026-07-29",
    "created_at": "2026-07-29T10:44:59Z",
    "category": "Development & Projects",
    "message": "Yesterday, I had the honour of meeting with the residents of Kihoto in Lakeview Ward, Naivasha Constituency, where we held meaningful discussions on the issues affecting our community and the solutions needed to move our constituency forward.\n\nI am deeply grateful for the warm reception, valuable insights, and overwhelming support you continue to show. Your trust and confidence strengthen my resolve to serve with integrity, accountability, and dedication.\n\nTogether, we will champion better roads, quality education, accessible healthcare, youth empowerment, and inclusive development for every corner of Naivasha.\n\nThe journey to a better Naivasha has begun, and together, we will make it a reality.\n\nHon. JM Gitau\nAspiring MP, Naivasha Constituency – 2027\n\n#JMGitau2027\n#NaivashaConstituency\n#LakeviewWard\n#LeadershipThatListens\n#TogetherWeCan",
    "engagement": {
      "reactions": 37,
      "comments": 21,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0bx7D1Aed5FDAjMwrYwARTWyPYKq2anyKs5726efw69hYNznS9eqszxDuZqrtifDfl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-29_1544038727736377_01",
        "post_id": "1544038727736377",
        "file_hash": "28856ffb2f991640a652bbf897c61efac317e4db2cbd5e4d0bec4ca0c92b397f",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/758543366_1544038037736446_6148227881077686339_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-6GOBwT8r8AQ7kNvwHLNSCZ&_nc_oc=Adp4vPPiftqmm8XttTptc0ufGfNBH4yZr63kM0sDD4I5X86sbJyt6b8l1fIENqbseU83ITctiKsLHyE5SMPo7Cok&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQER4MvaTbH-x3DcewWjRsIrDNe9ALD5l5dmZ4LDj4AnyQ&oe=6A8F95AE",
        "paths": {
          "raw": "assets/raw/2026-07-29_1544038727736377_01.jpg",
          "web": "assets/web/images/2026-07-29_1544038727736377_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-29_1544038727736377_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-29_1544038727736377_02",
        "post_id": "1544038727736377",
        "file_hash": "6dfc1919f3362875695a320bd473ffcb303280c3115e3aae0e6dac33606963cb",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/760160834_1544038117736438_8010087990450525511_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q4G-0vipURMQ7kNvwHxlKHA&_nc_oc=AdpkHprijOiN_QBjIdUVo7tb5YzAojI8ZxkKIxsaB8RL6AajK1-e3bOoT-SArT08d5gTDI6-UTKdxkbAgcvK_dFQ&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQELQoXQ_AnJ-aUFz6lzXYsL0v1cyxS_3TQgtWy3r2yhDw&oe=6A8FA992",
        "paths": {
          "raw": "assets/raw/2026-07-29_1544038727736377_02.jpg",
          "web": "assets/web/images/2026-07-29_1544038727736377_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-29_1544038727736377_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-29_1544038727736377_03",
        "post_id": "1544038727736377",
        "file_hash": "c8413c6be3aea8b6a9736b7665e0169ef6428b40e386a1455061fc3da0005375",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/759373863_1544038207736429_3836714020742351172_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uj5aPwc547YQ7kNvwH7CmCk&_nc_oc=AdpjCUQCfXud8Cu6Wi8hSvx65WyRvAIKxOG5_cptofElXLP_dI1C_u3avQz7Yvyw4K2zFizCFb3I_RwYMRMH2kDn&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQE5jS7PsRcMEEtC5GseHuXPhDwQ6LWb95vMoetpBgOopw&oe=6A8F94E7",
        "paths": {
          "raw": "assets/raw/2026-07-29_1544038727736377_03.jpg",
          "web": "assets/web/images/2026-07-29_1544038727736377_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-29_1544038727736377_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-29_1544038727736377_04",
        "post_id": "1544038727736377",
        "file_hash": "42360947f8d5daa6f8bf4cae5f984a74df8bde1885b1528a3a6cd3c45f2e4785",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/759676974_1544038267736423_5806654079199488121_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ixuLiDKiXsoQ7kNvwFwxQ8T&_nc_oc=Adpf__D7puBpbjd105z8Aq9wrf8PVTdTgvWOdiYkhCn1RFM1lGCUUMRfLoPhnUIcwamRIlAXxfa6sFORezjsWmxI&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQHCRFNMQCNliU8rPU-XnYPO89GKQdiTdJ2zzAY3qB-EAA&oe=6A8F89F9",
        "paths": {
          "raw": "assets/raw/2026-07-29_1544038727736377_04.jpg",
          "web": "assets/web/images/2026-07-29_1544038727736377_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-29_1544038727736377_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-29_1544038727736377_05",
        "post_id": "1544038727736377",
        "file_hash": "a54e9c8ef326394e0f4b6baab036d30754ef0ac8e1bb6407791d3df2776719b6",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/758765276_1544038311069752_834036460893990069_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1sFXTgcalnMQ7kNvwG62cjP&_nc_oc=AdqAfL8NlsqSbyzI-K7tyfWlqucDK2Ho828UBu8NX02Il1k3UBno1_xPgrLn7_5Icb4xMxy746z_rrQbqrNHlA63&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=X4jn8JKMq5-rq0ercqIvXw&_nc_ss=73289&oh=00_AQFwEhtXvUI6nPvt9eZ3ovA5Wh79L6pErO1OP6nHXaOB7w&oe=6A8F882E",
        "paths": {
          "raw": "assets/raw/2026-07-29_1544038727736377_05.jpg",
          "web": "assets/web/images/2026-07-29_1544038727736377_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-29_1544038727736377_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-29-yesterday--i-had-the-honour-of-736377"
  },
  {
    "post_id": "1543284774478439",
    "date": "2026-07-28",
    "created_at": "2026-07-28T14:14:14Z",
    "category": "Church & Community",
    "message": "Today, I had the privilege of meeting with the parents and pupils of Ngwataniro ECD in the Mount Margaret area of Maai Mahiu Ward. It was an important opportunity to listen to their concerns and witness firsthand the challenges facing this public Early Childhood Development Centre.\n\nParents shared their frustrations over the shortage of classrooms and teachers, challenges that continue to deny our children the quality foundation they deserve. The wider community also raised concerns about inadequate access to clean water, electricity, and other essential public services.\n\nEvery child deserves a safe, supportive, and well-equipped learning environment, and every family deserves access to basic services that improve their quality of life. The people of Mount Margaret have spoken, and their concerns deserve urgent attention.\n\nLeadership is about listening, standing with the people, and working towards practical solutions. I remain committed to championing quality education, improved infrastructure, reliable water and electricity, and inclusive development so that no community is left behind.\n\nTogether, we will build a stronger, more prosperous Naivasha.\n\nHon. JM Gitau\nAspiring MP, Naivasha Constituency – 2027\n\n#JMGitau2027\n#NaivashaDecides\n#LeadershipThatListens\n#EducationForAll\n#DevelopmentForAll\n#TogetherWeCan",
    "engagement": {
      "reactions": 24,
      "comments": 11,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid029m6yYGnGnkQhMkdSx7x4N93FMvxtYmhVXnBx1hXMf6hkNBDmwz8V2WHaQqQFyfefl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-28_1543284774478439_01",
        "post_id": "1543284774478439",
        "file_hash": "f0345ee68a2affa055d632045da2fb0e8191a6fcbaaa7c644d2417d3680b0c27",
        "dimensions": {
          "width": 443,
          "height": 590
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/757955036_1543284127811837_2307524691370612156_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b10RsNlvbA8Q7kNvwHZ_qRA&_nc_oc=AdpqbM9a1enUOPbQkPaB2oqjgp4bFo6_mMEz2vrn2-7dI5JqkmdsxKxj03TU71kKv-xKWJ8_58Qw160b-dWeAi7b&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQGqCJERyQbe-huO7bx2Lbk1965pG8ym0GpCpuoCVKTifA&oe=6A8FB73D",
        "paths": {
          "raw": "assets/raw/2026-07-28_1543284774478439_01.jpg",
          "web": "assets/web/images/2026-07-28_1543284774478439_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1543284774478439_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-28_1543284774478439_02",
        "post_id": "1543284774478439",
        "file_hash": "17e590944d39a759dc71b1bf91aad57f6d0539136f955ce82c489efd067bd92c",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/756989968_1543284167811833_4268088263153094471_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8UntBV_GkzcQ7kNvwHZNfFR&_nc_oc=AdoAMUvmkipY3ZjHZWqFDRwJ2y_5zSiTbRxwkkqmuzPi5HGOHJP8tryft6hJJOYDHgLNgiI5YJOom5XeymRQJA1h&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQG60z6qzwgE4D77klp7nrrJ-fN4LrSWX8lpcM-bRuXcxA&oe=6A8F9513",
        "paths": {
          "raw": "assets/raw/2026-07-28_1543284774478439_02.jpg",
          "web": "assets/web/images/2026-07-28_1543284774478439_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1543284774478439_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-28_1543284774478439_03",
        "post_id": "1543284774478439",
        "file_hash": "a857f4d51c78f335d77a50d1aa3a30b0718f01f4c526271d39aa32e80e7e2c91",
        "dimensions": {
          "width": 443,
          "height": 590
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/759850143_1543284217811828_4685466274032784729_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KPFAKBUfteUQ7kNvwEUk6A6&_nc_oc=Adpe7jQkm-R4xMb9v7jSGHP8XiFI9NPQdDUdSYUGk_WWdWNdtuahBOQt77N-A7SvfghBkfnfsOIi4UFRrBRNnCZI&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQF1ZS2UMpuFEShEvToqvzb6Ov9LHtfAC-uBIJsIkWcXBg&oe=6A8FB70F",
        "paths": {
          "raw": "assets/raw/2026-07-28_1543284774478439_03.jpg",
          "web": "assets/web/images/2026-07-28_1543284774478439_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1543284774478439_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-28_1543284774478439_04",
        "post_id": "1543284774478439",
        "file_hash": "88456e4fb6c797904bb9b43accc3ceb906d47e4bf84651fc368da109fe4ba6a1",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/756959387_1543284277811822_1775522153010259282_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I83wiqU10G0Q7kNvwGLeaX9&_nc_oc=AdqYT_hR8PajoSBsfxzOXtSEOh17Q3S9_NHbOUwSoMEK7WiH6EYfDxoYHhoUupQbgXkJ9hc3wIpJRDgaGHiSQ2BC&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQFE_a2IOh7z4DsJe3Shw76OqK9vjXhpZ7Wmq3g0tvovZA&oe=6A8F889D",
        "paths": {
          "raw": "assets/raw/2026-07-28_1543284774478439_04.jpg",
          "web": "assets/web/images/2026-07-28_1543284774478439_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1543284774478439_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-28_1543284774478439_05",
        "post_id": "1543284774478439",
        "file_hash": "58521bb7f97aec040f8ba4400896ea912d25a0d6830f02834ab8c08abe198dae",
        "dimensions": {
          "width": 590,
          "height": 443
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/758677475_1543284324478484_4997672239377848033_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Nfqx4MbU0cUQ7kNvwGeIWI0&_nc_oc=AdrKbUExOJY5lJME6GJ8HswAVgQbW996QwAuuLHttb1yKgq_50BuUmVzoFXK6AsCxsVqOjbkkfxXXPY_dxII-gGk&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQGcsczUdAFoQgonoX_b0A5wK_0lJ4CZ_PL7aH8ibrtJMw&oe=6A8FB5F7",
        "paths": {
          "raw": "assets/raw/2026-07-28_1543284774478439_05.jpg",
          "web": "assets/web/images/2026-07-28_1543284774478439_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1543284774478439_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-28-today--i-had-the-privilege-of-478439"
  },
  {
    "post_id": "1542986657841584",
    "date": "2026-07-28",
    "created_at": "2026-07-28T06:48:52Z",
    "category": "Press & Statements",
    "message": "Welcome to Naivasha,H.E. Rigathi Gachagua, EGH .\nNaivasha is honored to receive you as you engage with the people during your Nakuru County tour. Karibu to a land of resilience, opportunity, and hardworking people who remain committed to shaping a better future.\n\nKaribu Naivasha! \n\n#RiggyGNakuruTour #WelcomeToNaivasha #HomeOfItungati #Naivasha #DCP",
    "engagement": {
      "reactions": 42,
      "comments": 33,
      "shares": 2
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02CoNKx9HRLenA6ZP8Zb1iiBP3r8cTKt3f2DUaJ2xoxgbPv1TzYRjfy1k4Tuayb6VRl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-28_1542986657841584_01",
        "post_id": "1542986657841584",
        "file_hash": "e9d29551c4c57c4cbca762838d436377e8ec0f4ec2ef4220460822bd86502445",
        "dimensions": {
          "width": 507,
          "height": 720
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/758154569_1542986121174971_1836344318668691280_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3-OkVIXOk_YQ7kNvwFEc9Tn&_nc_oc=AdqjFuAYDeuIDofjzCsC8MquIe9K6g49jko2ycV8yksrd2lTaRZ4sunyGDV81QXreSzhWhSAeCYdWlvW2BpVqQqY&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQG1_nJgSQdsUubqKPukRXlRD5eoSAD-3dLdWhcrm7MSWg&oe=6A8FAB09",
        "paths": {
          "raw": "assets/raw/2026-07-28_1542986657841584_01.jpg",
          "web": "assets/web/images/2026-07-28_1542986657841584_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-28_1542986657841584_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-28-welcome-to-naivasha-h-e--rigat-841584"
  },
  {
    "post_id": "1542343587905891",
    "date": "2026-07-27",
    "created_at": "2026-07-27T13:19:38Z",
    "category": "Church & Community",
    "message": "As we conclude the Second Term, I congratulate all learners across Naivasha Constituency for their hard work, discipline, and commitment to education.\n\nI also extend my sincere appreciation to parents, guardians, teachers, and school administrators for their unwavering support in nurturing and guiding our children.\n\nTo all our learners, I encourage you to continue working hard and putting more effort into your studies. Education remains one of the most powerful tools for transforming lives and unlocking opportunities for a brighter future. Use this holiday period wisely by revising your work, reading widely, and preparing yourselves for even greater success in the coming term.\n\nAs your aspiring Member of Parliament, I remain fully committed to supporting education in Naivasha. I will continue working with all stakeholders to champion better school infrastructure, improved learning environments, and greater opportunities for our young people.\n\nMy goal is to help ensure that every learner in Naivasha has the opportunity to pursue their dreams and contribute positively to society.\n\nI wish all learners a peaceful, enjoyable, and productive holiday. May God bless you, protect you, and grant you success in your academic journey.\n\nHon. JM Gitau\nAspiring MP, Naivasha Constituency 2027\n\n#JMGitau2027\n#NaivashaDecides\n#EducationForAll\n#LeadershipThatCares\n#InvestingInOurFuture",
    "engagement": {
      "reactions": 26,
      "comments": 24,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid0hMegUG8gGHeAJLdccLSaXVU81i5WEwt595ncLnzipYo9m1mp6FQsqwZw7pSu5fLKl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-27_1542343587905891_01",
        "post_id": "1542343587905891",
        "file_hash": "1ecf7d4001bad59a8155b4e5db169fc36a4e5686adec739e98c0a6ebe25a6e98",
        "dimensions": {
          "width": 720,
          "height": 540
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/756043645_1542343561239227_5638423319813459430_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ujJ4qqOKnh8Q7kNvwHEIVV1&_nc_oc=AdoQKbnq6nARyZaWGV1btX56kvTnamP4fEuyofh7MmzFjvb-YcCQLObXC2OdrwCmAC612xCdgr6CpNgXcEo7f5Cb&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=u52alpofcOlW7Mc0_R31qA&_nc_ss=73289&oh=00_AQFXsTSWMyEkCSf3lbpHyGX5KQcmF1arqqAe-6Epfiw4Kw&oe=6A8FA15F",
        "paths": {
          "raw": "assets/raw/2026-07-27_1542343587905891_01.jpg",
          "web": "assets/web/images/2026-07-27_1542343587905891_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-27_1542343587905891_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-27-as-we-conclude-the-second-term-905891"
  },
  {
    "post_id": "1541315318008718",
    "date": "2026-07-26",
    "created_at": "2026-07-26T09:50:54Z",
    "category": "Development & Projects",
    "message": "My Fellow People of Naivasha,\n\nNaivasha has contributed immensely to Kenya's growth, yet our people continue to wait for the development they deserve. The time has come for strong, accountable leadership that puts the interests of our people first.\n\nI, Hon. JM Gitau, humbly seek your support to serve as your Member of Parliament for Naivasha Constituency in 2027. I am committed to championing better roads, quality healthcare, employment opportunities for our youth, improved education, and equitable development across every ward.\n\nThis is not just my journey—it is our movement for change, progress, and a better future.\n\nTogether, let's make Naivasha's voice count. Together, let's deliver the leadership our people deserve.\n\nJM Gitau for MP — Naivasha Constituency 2027.\n\n#JMGitau2027\n#NaivashaDecides\n#LeadershipThatListens\n#DevelopmentForAll\n#TogetherWeCan",
    "engagement": {
      "reactions": 64,
      "comments": 57,
      "shares": 1
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02Uh6rpfFGn5yhfuLioCid1aojNKAxNdGzuMqj1JxDvp3Ta5dU12L5ZBWGvHm8ehQyl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-26_1541315318008718_01",
        "post_id": "1541315318008718",
        "file_hash": "87129cd7f34736169ee0b3d20e23a4759dfa7107e7abd8448445c7c570830373",
        "dimensions": {
          "width": 526,
          "height": 789
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/755351251_1541315271342056_425113633318838198_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vumz6h-JpuYQ7kNvwH5j931&_nc_oc=AdqHOFP_YxgCqQazonpu_Zic7eD30ohBfHqToa-18FYLWZrhWnixK0PR8Y_MIBgAbifoBoWCdCwSFYeP0W_ZxBMj&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQE_kg_DTuHQE0hksZ49dG4inw0H_cCArnrvuX_K5EcU3w&oe=6A8F92E8",
        "paths": {
          "raw": "assets/raw/2026-07-26_1541315318008718_01.jpg",
          "web": "assets/web/images/2026-07-26_1541315318008718_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-26_1541315318008718_01_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-26-my-fellow-people-of-naivasha-008718"
  },
  {
    "post_id": "1539990891474494",
    "date": "2026-07-24",
    "created_at": "2026-07-24T18:15:21Z",
    "category": "Church & Community",
    "message": "Today, I joined family, friends, relatives, and residents of Ndabibi/Maiela Ward to bid farewell to the late Mama Shiku and stand in solidarity with the bereaved family during this difficult time.\n\nLosing a loved one is never easy, and the pain of saying goodbye is deeply felt by family, friends, and the entire community. I extend my heartfelt condolences to the family and everyone who knew and loved Mama Shiku.\n\nMay God grant you strength, comfort, and peace as you navigate this season of grief.\n\n\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\" — Psalm 34:18\n\nMay the soul of Mama Shiku rest in eternal peace.\n\n#JMGitau2027\n#NaivashaDecides\n#LeadershipThatCares\n#ServingThePeople\n#RestInPeace",
    "engagement": {
      "reactions": 43,
      "comments": 21,
      "shares": 2
    },
    "post_url": "https://www.facebook.com/JMGitauNaivashaMP/posts/pfbid02d5xgoPVfHmhhu4Cu2q8nj6v5pZYCDHAGYirJiyhZ83BHitYhNHQHGxGYh8mgFEQSl",
    "video_url": null,
    "assets": [
      {
        "asset_id": "2026-07-24_1539990891474494_01",
        "post_id": "1539990891474494",
        "file_hash": "ba4ce347e0a58b8bbacb3860d656b6e9e67b83154ba6f491655340f7cb72e286",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/756136571_1539990474807869_6257436068602623164_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qPAv7IbX7aoQ7kNvwFB1d2X&_nc_oc=AdqZczc1M-PRyjMjFU0csGhfDUP20brOsY6MxbeSO-OU8cXMaqbMee4j5YQiybiOows18xoghvog39w5s9WI8rLW&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQE2BFbhelh2n_oXx-tH_ljByWFwlSLYjGSAWYfI-Iabxw&oe=6A8FA69E",
        "paths": {
          "raw": "assets/raw/2026-07-24_1539990891474494_01.jpg",
          "web": "assets/web/images/2026-07-24_1539990891474494_01.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-24_1539990891474494_01_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-24_1539990891474494_02",
        "post_id": "1539990891474494",
        "file_hash": "8779d82bbe9ec246a872b2a09c7194403ccb641760e78de2553a39b190e08c51",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/756440522_1539990511474532_5873936269682054959_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KpvuH0BOVNAQ7kNvwFZMqA-&_nc_oc=AdrMWk_lNhgh6ckOixNtd1jiGpaRpr-L0CGsbv_BIbD7JbouTdQklofWPGz5F5dq6VnGN3CHbJ2ZwCrUE6Pwhlg4&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQFfjj0vTiyMsm1vi359idFH4qUeoTdivJ2gBzN3pmcsnQ&oe=6A8FA36C",
        "paths": {
          "raw": "assets/raw/2026-07-24_1539990891474494_02.jpg",
          "web": "assets/web/images/2026-07-24_1539990891474494_02.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-24_1539990891474494_02_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-24_1539990891474494_03",
        "post_id": "1539990891474494",
        "file_hash": "a8fa5fdc355e03862d20bb2be49600c41e0e48a48f06612fc389316223999812",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/752489149_1539990561474527_3085621393783612094_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AUPGXh6ZCrUQ7kNvwFm9UeR&_nc_oc=AdqwSKTsCoaWtg96PqF1n_rDmr7yOSSBNNC9GeZBnWQn1Vgsw408Oy7n5cOLojwDdwVMYIguBZtQoOD3vdL8dsfV&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQGfeioptgd3WEh6yyXURH_EPGGfru06IYszmV2eVexrAA&oe=6A8FA48F",
        "paths": {
          "raw": "assets/raw/2026-07-24_1539990891474494_03.jpg",
          "web": "assets/web/images/2026-07-24_1539990891474494_03.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-24_1539990891474494_03_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-24_1539990891474494_04",
        "post_id": "1539990891474494",
        "file_hash": "61828cd1b0dd7458ec7fbc10897d37b2f6d081928b1b1cf0d9d64ef54e8a26ff",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/753255440_1539990604807856_7391346523477913372_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ayc0FKttdLMQ7kNvwEi01-F&_nc_oc=AdqVMPQ-2y_hL8dZatzvSfRfGrPJM9eAau6EZSYr8F2CDAGmnIA2s06ZsByKgvvWqM62MDHshBgLZmuUBn08TnhO&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQHkpF1dsxw2Z-OTGXqa-dBFkJ3ycAbozdqCwimg6jv9lg&oe=6A8FA177",
        "paths": {
          "raw": "assets/raw/2026-07-24_1539990891474494_04.jpg",
          "web": "assets/web/images/2026-07-24_1539990891474494_04.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-24_1539990891474494_04_thumb.webp"
        }
      },
      {
        "asset_id": "2026-07-24_1539990891474494_05",
        "post_id": "1539990891474494",
        "file_hash": "293237a745781f1765baf61f9bed002c11ea21c7d5566b1228b82ccd850baad1",
        "dimensions": {
          "width": 590,
          "height": 393
        },
        "original_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/753329174_1539990631474520_1862437620800390506_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jfE0iLSeX8kQ7kNvwEzilIN&_nc_oc=AdqKcYE3GpSSZbqdY9aSb3D7-66T6nFqTRHjvXPiqXuVjswzfQnOKRvX7ifl-6y_MLc9B5k6-RNARSi1T2Hu7Old&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=LBcRlZhVumbOePT5Php2qg&_nc_ss=73289&oh=00_AQEZxavPPMlNXyFgtqh1j69AQYOveFV7_0QzOVUfW6L37Q&oe=6A8F969B",
        "paths": {
          "raw": "assets/raw/2026-07-24_1539990891474494_05.jpg",
          "web": "assets/web/images/2026-07-24_1539990891474494_05.webp",
          "thumbnail": "assets/web/thumbnails/2026-07-24_1539990891474494_05_thumb.webp"
        }
      }
    ],
    "slug": "2026-07-24-today--i-joined-family--friend-474494"
  }
];

export const AGENDA_PILLARS: AgendaPillar[] = [
  {
    id: 'education-bursaries',
    title: 'Education & CDF Bursaries',
    slug: 'education-bursaries',
    tagline: 'Room to learn. A chance to move forward.',
    description: 'Expanding access to secondary, vocational, and tertiary education through transparent bursary allocation and school infrastructure upgrades.',
    icon: 'GraduationCap',
    highlights: [
      'Fair and transparent bursary disbursement across all Naivasha Wards.',
      'Constructing modern science labs and computer hubs in constituency secondary schools.',
      'Supporting TVET vocational training scholarships for Naivasha youth.'
    ]
  },
  {
    id: 'water-infrastructure',
    title: 'Clean Water & Infrastructure',
    slug: 'water-infrastructure',
    tagline: 'The basics matter.',
    description: 'Community water points, piped water distribution networks in rural wards, and upgrading agricultural feeder roads to connect farmers directly to markets.',
    icon: 'Droplets',
    highlights: [
      'Solar-powered community boreholes in drought-prone areas.',
      'Upgrading rural access roads to facilitate fresh produce transport from Naivasha farms.',
      'Expanding street lighting in trading centers for safety and local commerce.'
    ]
  },
  {
    id: 'youth-women-empowerment',
    title: 'Youth & Enterprise',
    slug: 'youth-women-empowerment',
    tagline: 'Opportunity should not depend on who you know.',
    description: 'Direct constituency support for youth enterprise, self-help groups, sports tournaments, and digital skill hubs across Naivasha.',
    icon: 'Users',
    highlights: [
      'Constituency Innovation & Digital Hubs for remote work and freelancing.',
      'Capital seed grants for youth and women-led small businesses.',
      'Annual Naivasha Constituency Sports Cup fostering talent and unity.'
    ]
  },
  {
    id: 'healthcare-social-welfare',
    title: 'Healthcare & Social Support',
    slug: 'healthcare-social-welfare',
    tagline: 'Good healthcare should be closer to home.',
    description: 'Strengthening Naivasha Level 4 Hospital, equipping rural dispensaries, and providing emergency medical support funds for vulnerable residents.',
    icon: 'HeartPulse',
    highlights: [
      'Equipping ward health dispensaries with essential supplies and maternity equipment.',
      'Organizing constituency medical camps for senior citizens and families.',
      'Support programs for vulnerable households, widows, and persons living with disabilities.'
    ]
  }
];

export const NAIVASHA_WARDS: WardInfo[] = [
  {
    id: 'biashara',
    name: 'Biashara Ward',
    slug: 'biashara',
    representative: 'Naivasha Town Center',
    population: '45,000+',
    keyProjects: ['Town Drainage System', 'Street Lighting', 'Market Upgrades'],
    description: 'The commercial heart of Naivasha Constituency, supporting traders, retail business, and urban transport infrastructure.'
  },
  {
    id: 'hells-gate',
    name: "Hell's Gate Ward",
    slug: 'hells-gate',
    representative: 'Olkaria / Tourism Corridor',
    population: '38,000+',
    keyProjects: ['Ecotourism Youth Jobs', 'Community Water Points', 'Feeder Roads'],
    description: 'Home to geothermal energy, national park tourism, and vibrant flower farm agricultural communities.'
  },
  {
    id: 'lakeview',
    name: 'Lakeview Ward',
    slug: 'lakeview',
    representative: 'Lake Naivasha Belt',
    population: '32,000+',
    keyProjects: ['Fishery Support', 'Primary School Classrooms', 'Health Clinic'],
    description: 'Serving lakeside communities, fishermen, and educational institutions along Lake Naivasha.'
  },
  {
    id: 'mai-mahiu',
    name: 'Mai Mahiu Ward',
    slug: 'mai-mahiu',
    representative: 'Rift Valley Transport Gateway',
    population: '50,000+',
    keyProjects: ['Dry Port Logistics Jobs', 'Flood Control & Drainage', 'Water Piping'],
    description: 'A major economic transit hub connecting Nairobi, Narok, and Nakuru counties.'
  },
  {
    id: 'maiela',
    name: 'Maiela Ward',
    slug: 'maiela',
    representative: 'Sero Moi Ndabi & Maiela',
    population: '28,000+',
    keyProjects: ['Boreholes & Water Storage', 'Secondary School Labs', 'Feeder Roads'],
    description: 'Agricultural heartland focused on crop farming, dairy production, and rural community empowerment.'
  },
  {
    id: 'olkaria',
    name: 'Olkaria Ward',
    slug: 'olkaria',
    representative: 'Geothermal Power Hub',
    population: '30,000+',
    keyProjects: ['Clean Energy Partnerships', 'Youth Technical Scholarships', 'Health Centers'],
    description: 'Industrial and renewable energy center powering Kenya while driving local job creation.'
  },
  {
    id: 'naivasha-east',
    name: 'Naivasha East Ward',
    slug: 'naivasha-east',
    representative: 'Karati & Surrounds',
    population: '35,000+',
    keyProjects: ['Karati Water Pipeline', 'Polytechnic Training Center', 'Market Sheds'],
    description: 'Vibrant farming and trading community serving eastern Naivasha Constituency.'
  }
];

export const CAMPAIGN_EVENTS: CampaignEvent[] = [
  {
    id: 'evt-1',
    title: 'Naivasha Constituency Economic Empowerment Forum',
    date: '2026-09-05',
    time: '10:00 AM - 1:00 PM',
    location: 'Naivasha Town Hall, Biashara Ward',
    ward: 'Biashara Ward',
    type: 'Town Hall',
    description: 'Public engagement with local business owners, youth entrepreneurs, and boda boda associations on CDF micro-grants.'
  },
  {
    id: 'evt-2',
    title: 'Maiela Ward Farmers & Water Infrastructure Inspection',
    date: '2026-09-12',
    time: '02:00 PM - 5:00 PM',
    location: 'Sero Moi Ndabi Grounds, Maiela Ward',
    ward: 'Maiela Ward',
    type: 'Community Meeting',
    description: 'On-the-ground inspection of new community water borehole installations and discussion with agricultural groups.'
  },
  {
    id: 'evt-3',
    title: 'Mai Mahiu Youth Skills & Sports Championship',
    date: '2026-09-20',
    time: '09:00 AM - 4:00 PM',
    location: 'Mai Mahiu Primary Grounds',
    ward: 'Mai Mahiu Ward',
    type: 'Youth & Sports',
    description: 'Constituency football finals and registration for TVET technical training bursaries.'
  }
];
