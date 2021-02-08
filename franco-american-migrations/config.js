var config = {
    accessToken: 'pk.eyJ1IjoiZnJhbmNvLW1haW5lLXN0b3JpZXMiLCJhIjoiY2toYXd1MWF1MDhhaTJ5cGM5aTI0MjJ4eiJ9.PgsNloCiMJqRAp2A_qT6XA',
    style: 'mapbox://styles/franco-maine-stories/ckievtt4f3koc19ozyskb8153',
    theme: 'light', // 'light' or 'dark'
    alignment: 'right', //'left', 'lefty', 'center', 'centered', 'right', 'righty'
/////////Title & Introduction//////////
    toptitle: '<a href="https://francomainestories.net/">Franco-Americans of Maine, Then and Now.</a>',
    //toptitle: 'This overview is not meant to be comprehensive, but a simple entry point. Made possible by <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a>.',
    title: 'French to Franco-American',
    byline: 'Produced by Rhumb Line Maps, 2020', //authors of the piece
    description: '</p><p> A Quick Overview of French Migrations in North America',
    footer: 'This overview is not meant to be comprehensive, but a simple entry point. Made possible by <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.rhumblinemaps.com/">Rhumb Line Maps</a>',
////////////////////////////////////////
        chapters: [
    //////////Intro///////////////////
          {
              id: 'intro', //every chapter must have a unique id name
              title: 'Across the Atlantic',
              description:'People have migrated throughout history in every corner of the globe. Our focus is to create a visual representation of where the Franco-American community in Maine came from, in a series of broad sweeping strokes. This visual is not meant to be comprehensive, but to serve as a point of interest for those who are curious to learn more.',
              location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
                  center: [-20.87878,30.22231],
                  zoom: 1.8,
                  pitch: 0,
                  bearing: 0
              },
              onChapterEnter: [
                {
                    layer: 'french-sp-2segs4', //name of layer as it's found in the refrenced style
                    opacity: .9
                }
              ],
              onChapterExit: [
                {
                    layer: 'french-sp-2segs4',
                    opacity: 0
                }
              ]
          },
  ////////////////////////////////////////
      //////////Chapter 1///////////////////
              {
                  id: 'c1-thepeopleherebefore', //every chapter must have a unique id name
                  image: 'images/image-1.png',
                  title: 'The People Here Before',
                  description:'While our aim is to tell the story of a European people, it is important to recognize that the land we now call North America was not empty when the first settlers arrived; an entire continent of people with numerous cultures already called this land home. Many features of the landscape in North America still retain their ancestral names. Although we now think of these places as Maine, Quebec, New Brunswick, and Nova Scotia, hopefully this map will provide some sense of the wide variety of languages present.',
                  location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
                      center: [-55.27612,54.30259],
                      zoom: 3.56,
                      pitch: 0,
                      bearing: 0
                  },
                  onChapterEnter: [
                    {
                        layer: 'placenamelanguage-40caus', //name of layer as it's found in the refrenced style
                        opacity: 1
                    }
                  ],
                  onChapterExit: [
                    {
                        layer: 'placenamelanguage-40caus',
                        opacity: 0
                    }
                  ]
              },
  ////////////////////////////////////////
      //////////Chapter 2///////////////////
        {
            id: 'c2-formation', //every chapter must have a unique id name
            image: 'images/image-2.png',
            title: 'French Explorers (1500s-1600s)',
            description: 'Jacques Cartier and Samuel de Champlain were two of the most well-known, early French explorers. After planting a cross on the shore of the Gaspé Peninsula in 1532, Cartier returned several times to explore the area. While this provided a symbolic start to New France, it would be Samuel de Champlain who established the first settlements. Champlain explored coastal Maine and accurately mapped many of the places he encountered.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
                center: [ -56, 47],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'voyages-2k47wh', //name of layer as it's found in the refrenced style
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'voyages-2k47wh',
                  opacity: 0
              }
            ]
        },
  ////////////////////////////////////////
      //////////Chapter 3/////////////////////
        {
            id: 'c3-formation',
            image: 'images/image-3.png',
            title: 'The Formation of New France (Early 1700s)',
            description: 'During the 1600s and 1700s the settlements of Acadia and Quebec began to take hold;  extensive trade routes traversed in to the interior via waterway. Missionary activity spread predominantly out of the settlement of Quebec (now Quebec City), and it was sanctioned by the Catholic Church. The settlements of both Quebec and Acadia were sponsored by the government unlike their New England neighbors to the south. These settlers, though far from France, still had a strong allegiance to the crown.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
                center: [-72.32175, 43.47205],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'na-before-33h3us', //name of layer as it's found in the refrenced style
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: 'na-before-33h3us',
                  opacity: 0
              }
            ]
        },
////////////////////////////////////////
    //////////Chapter 4/////////////////////
        {
            id: 'c4-colonization',
            image: 'images/image-4.png',
            title: 'Colonization and Resulting Wars (1700s)',
            description: 'The conflicts that dominated the late 1600s and early 1700s in New France mirrored the global issues and wars raging in Europe. Perhaps the most well known war of this time in North America involved New France, the British Colonies, and a variety of indigenous peoples. To the British, it was called the French & Indian War. The British declared victory with the signing of the Treaty of Paris in 1763. The French ceded the colony of Canada and their claims to territory east of the Mississippi.',
            location: {
                center: [-72.32175, 43.47205],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'na-after-ajatwq', //name of layer as it's found in the refrenced style
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: 'na-after-ajatwq',
                  opacity: 0
              }
            ]
        },
////////////////////////////////////////
    //////////Chapter 5/////////////////////
        {
            id: 'c5-upheaval',
            image: '',
            title: 'The Great Upheaval (1700s)',
            description:'Traditionally, the French of northeastern Maine and the Maritime Provinces were called Acadians. After the Treaty of Utrecht was signed in 1713 these lands were ceded to the British and the Acadians were asked to make an oath of allegiance to Britain. Many were reluctant. The governor—who feared military retribution—ordered the expulsion of all Acadians regardless of their standings. In 1755 the mass deportation of the Acadians began. In multiple waves, Acadians were sent to American Colonies, the Caribbean, Britain, and France. Thousands died from the harsh conditions they were subjected to. In 1764, small numbers were allowed to return to their homes once they took the oath of allegience. A slow trickle of Acadiens started to return but others found new places to settle. Many made a new home in Maine’s St. John Valley.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
              center: [-65.08339, 35.25340],
              zoom: 3,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'franco-maine-stories-52m98450', //name of layer as it's found in the refrenced style
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: 'franco-maine-stories-52m98450',
                  opacity: 0
              }
            ]
        },
////////////////////////////////////////
    //////////Chapter 6-- same zoom, shifted north to great lakes/////////////////////

        {
            id: 'c6-unification',
            image: 'images/image-6.png',
            title: 'Lower and Upper Canada (1700s-1800s)',
            description: 'As an influx of Loyalists fled the American Revolution, Canada was split into two distinct colonies to accommodate some of the relocated English settlers. In 1791, Upper Canada and Lower Canada were formed along the St. Lawrence River—upstream and downstream—with the Ottawa River acting as a rough boundary between the two. Lower Canada was primarily composed of French speakers whereas Upper Canada was English. In 1841, after a series of rebellions, Lower Canada and Upper Canada were eventually united and made into the Province of Canada.',
            location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
                center: [-65.08339, 45.47121],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'upperandlower-9ktny6', //name of layer as it's found in the refrenced style
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: 'upperandlower-9ktny6',
                  opacity: 0
              }
            ]
        },
////////////////////////////////////////
    //////////Chapter 7/////////////////////
    {
        id: 'c7-migration',
        image: '',
        title: 'From Farms to Factories (Late 1800s)',
        description:'While some migration into Maine began during the rebellions in the mid 1800s, it wasn’t until 1860s that people really began to move in great numbers. Canada’s population was growing but farmers and agricultural workers struggled to feed their families. An economic recession in Canada contrasted with opportunity in the United States. The pull of stable jobs in the textile and pulp industries convinced many to make the trip south to the mill towns along the rivers of New England.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
            center: [-67.08339, 45.47121],
            zoom: 6.2,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
                    {
              layer: 'franco-maine-stories-6ik893m0', //name of layer as it's found in the refrenced style
              opacity: .6
          }
        ],
        onChapterExit: [
          {
              layer: 'franco-maine-stories-6ik893m0', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 8/////////////////////
{
    id: 'c8-today',
    image: '',
    title: 'Franco-Americans Today',
    description:'This map shows the Franco-American population in Maine as of 2000. Franco-American\’s have had a long journey. They entered the workforce having had to handle the harsh conditions as well as tensions with other workers and community members. There was a fair amount of assimilation into American society, some of it was accepted, some of it forced upon them. It may not have been easy but they have held fast to their own culture along the way.  A Franco Heritage Center now exists in Lewiston while Franco communities are dotted across Maine.  The rich history and cultural tenacity of the Franco-American\’s have taken their own place in Maine\'s historical narrative.',
    location: {  /* go to 'https://demos.mapbox.com/location-helper/' to get location info'*/
        center: [-67.08339, 45.47121],
        zoom: 6.2,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
                  {
            layer: 'francosupload-2rqu17', //name of layer as it's found in the refrenced style
            opacity: .6
        }
      ],
      onChapterExit: [
        {
            layer: 'francosupload-2rqu17', //name of layer as it's found in the refrenced style
            opacity: 0
        }
      ]
  },
]
};
