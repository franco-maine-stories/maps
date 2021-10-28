var config = {
    accessToken: 'pk.eyJ1IjoiZnJhbmNvLW1haW5lLXN0b3JpZXMiLCJhIjoiY2toYXd1MWF1MDhhaTJ5cGM5aTI0MjJ4eiJ9.PgsNloCiMJqRAp2A_qT6XA',
    style: 'mapbox://styles/franco-maine-stories/ckv6y1c4r82po14o66m3qic31',
    theme: 'dark', // 'light' or 'dark'
    alignment: 'right', //'left', 'lefty', 'center', 'centered', 'right', 'righty'
/////////Title & Introduction//////////
    toptitle: '<a href="https://francomainestories.net/">Franco-Americans of Maine, Then and Now.</a>',
    //toptitle: 'This overview is not meant to be comprehensive, but a simple entry point. Made possible by <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a>.',
    title: 'Into the Woods',
    byline: 'Produced by Rhumb Line Maps, 2021', //authors of the piece
    description: '</p><p> Franco-Americans and the Maine Lumber Industry',
    footer: 'Many thanks to the Maine Bicentennial Grant. Made possible by <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.rhumblinemaps.com/">Rhumb Line Maps</a>',
////////////////////////////////////////
        chapters: [
    //////////Intro///////////////////
          {
              id: 'intro', //every chapter must have a unique id name
              image: 'images/image-i.png',
              title: 'British Masts & Old Growth Forest',
              description:'Logging in Maine dates back to the 17th century. Maine was first the land of the Algoquian peoples, but it was later settled by the English as part of the Commonwealth of Massachusetts (indicated in green). Today most residents affectionately call this the “Pine Tree State” in the United States of America; and the woods of northern Maine have indeed long been known for the presence of this towering tree for centuries. In the early days, pine trees more than 24 inches in diameter were marked for use in the Royal Navy’s production of masts.',
              location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
                  center: [-18.5,30.5],
                  zoom: 1.9,
                  pitch: 0,
                  bearing: 0
              },
              onChapterEnter: [
                {
                    layer: 'commonwealthmass-26lgug', //name of layer as it's found in the refrenced style
                    opacity: 0.8
                }
              ],
              onChapterExit: [
                {
                    layer: 'commonwealthmass-26lgug',
                    opacity: 0
                }
              ]
          },
  ////////////////////////////////////////
      //////////Chapter 1///////////////////
              {
                  id: 'c1-kingspines', //every chapter must have a unique id name
                  image: 'images/image-1.jpg',
                  title: 'The King\'s Pines',
                  description:'In fact, one of the very first sawmills in North America was built in Berwick, Maine in the early 1600s. The harvest of “King’s Pines” eventually diminished, but the region boomed with timber export throughout the 1800s.',
                  location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
                      center: [-68.01,45.5],
                      zoom: 6,
                      pitch: 0,
                      bearing: 0
                  },
                  onChapterEnter: [
                    {
                        layer: 'maine-1hamoq', //name of layer as it's found in the refrenced style
                        opacity: 0.6
                    }
                  ],
                  onChapterExit: [
                    {
                        layer: 'maine-1hamoq',
                        opacity: 0.3
                    }
                  ]
              },
  ////////////////////////////////////////
      //////////Chapter 2///////////////////
      {
          id: 'c2-waterways', //every chapter must have a unique id name
          image: 'images/image-2.jpg',
          title: 'A Network of Rivers',
          description:'Maine\'s extensive waterways made it ideal for the early timber harvest. Crews began in the late fall and winter: camps were built, trees were scaled and harvested, and then riverdrivers ushered the winter cut directly downstream to mills in the spring. Once cut into lumber, it could be shipped from the coast.',
          location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
              center: [-68.01,45.5],
              zoom: 6,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
            {
                layer: 'maine-1hamoq', //name of layer as it's found in the refrenced style
                opacity: 0.3
            },
            {
                layer: 'riverselection2-57cxyy', //name of layer as it's found in the refrenced style
                opacity: 1
            }
          ],
          onChapterExit: [
            {
                layer: 'maine-1hamoq',
                opacity: 0.2
            },
            {
                layer: 'riverselection2-57cxyy', //name of layer as it's found in the refrenced style
                opacity: 0
            }
          ]
      },
  ////////////////////////////////////////
      //////////Chapter 3/////////////////////
      {
          id: 'c3-watersheds', //every chapter must have a unique id name
          image: 'images/image-3.jpg',
          title: 'Watershed Work, Watershed Communities',
          description:'Most "board feet" reporting (total lumber) was done by watershed; and it was also by watershed that most companies and crews worked. When the riverdrive ended, the men would return to the mills and towns along the same rivers they worked. Some had family, some found summer work before the next cutting season.',
          location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
              center: [-68.01,45.5],
              zoom: 6,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [
            {
                layer: 'watersheds-clipped-6ifzob', //name of layer as it's found in the refrenced style
                opacity: 1
            }
          ],
          onChapterExit: [
            {
                layer: 'watersheds-clipped-6ifzob', //name of layer as it's found in the refrenced style
                opacity: 0
            }
          ]
      },
////////////////////////////////////////
    //////////Chapter 4/////////////////////
    {
        id: 'c4-select-watersheds', //every chapter must have a unique id name
        image: 'images/image-4.png',
        title: 'The Lumber Capital of the World',
        description:'Though Bangor was deemed the "Lumber Capital of the World" in the early 1800s, by the mid 1800s the rest of the U.S. caught up to east coast production. In 1872, the majority of Maine\'s over 500 million yearly board-feet came from one of three major watersheds: the Penobscot River, the Kennebec River, or Androscoggin River.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.01,45.5],
            zoom: 6,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'watershedslarge-9txbxp', //name of layer as it's found in the refrenced style
              opacity: 0.5
          },
          {
              layer: 'watersheds-clipped-6ifzob', //name of layer as it's found in the refrenced style
              opacity: 0.5
          }
        ],
        onChapterExit: [
          {
              layer: 'watershedslarge-9txbxp', //name of layer as it's found in the refrenced style
              opacity: 0
          },
          {
              layer: 'watersheds-clipped-6ifzob', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 5/////////////////////
    {
        id: 'c5-labor', //every chapter must have a unique id name
        image: 'images/image-5.jpg',
        title: 'Dangerous Labor',
        description:'Many French Canadians crossed the border to work in lumber camps. The relation between French-Canadian immigrants and locals was complicated; it was frequently biased and racialized. Franco-Americans were often considered “non-white,” or as having “native” blood. The formation of stereotypes enabled some lumber companies to leverage these immigrants into unfavorable working conditions, especially those who could not self-advocate in English. Lumbering was hard, dangerous work. Check out <a href="https://www.loc.gov/item/00563599/">this video</a> from the Library of Congress to see lumbering work in the Maine woods. Highlighted is the Penobscot River watershed. The next segment follow a typical season.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.01,45.5],
            zoom: 7.5,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'penobscotwatershed-bz5lan', //name of layer as it's found in the refrenced style
              opacity: 0.75
          },
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 1
          }
        ],
        onChapterExit: [
          {
              layer: 'penobscotwatershed-bz5lan',
              opacity: 0.3
          },
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 6-- same zoom, shifted north to great lakes/////////////////////

    {
        id: 'c6-cutting', //every chapter must have a unique id name
        image: 'images/image-6.jpg',
        title: 'Winter Cutting',
        description:'The season started in the fall. Camps like this one were prepared and then cutting started as soon as the lakes and ground was frozen. Winter was the optimal time for felling trees because the wood was dry and easier to move on the snow and ice. They worked sunrise to sunset six days a week, during which they only paused for mealtimes and sleep.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-69.3, 46.2],
            zoom: 11.5,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'penobscotwatershed-bz5lan', //name of layer as it's found in the refrenced style
              opacity: 0.3
          },
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'penobscotwatershed-bz5lan',
              opacity: 0
          },
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 7/////////////////////
    {
        id: 'c7-camp', //every chapter must have a unique id name
        image: 'images/image-7.jpg',
        title: 'Logging Camps',
        description:'Early lumber camps were often a single room. There would be a fire in the center for cooking and warmth, and one large bed that ran the length of the cabin. Most of the cutting and skidding of timber happened in the areas surrounding these temporary structures. Although camp sizes grew and changed through the 1800s and 1900s—with additional buildings for cooking, housing livestock, and separate quarters for the boss—it didn’t always make the living situation more comfortable.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-69.3, 46.2],
            zoom: 12,
            pitch: 55,
            bearing: 20
        },
        onChapterEnter: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 8/////////////////////
    {
        id: 'c8-sluiceways', //every chapter must have a unique id name
        image: 'images/image-8.jpg',
        title: 'Sluices & Dams',
        description:'After trees were scaled and harvested, riverdrivers ushered the logs downstream using dams, chutes, and booms. Even though many could not swim, they walked across moving logs and relied on their agility and spiked boots for safety. Riverdrivers broke up jams with a peavey, or, in some cases, dynamite. The Telos Cut was an important sluiceway that redirected logs from the north-flowing Allagash to the Bangor region via the Penobscot River. <a href="https://video.maine.edu/channel/Oral+Histories/101838251">Click here</a> for a fascinating interview with a Franco-American riverdriver.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-69.3, 46.2],
            zoom: 12,
            pitch: 55,
            bearing: 110
        },
        onChapterEnter: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 9/////////////////////
    {
        id: 'c9-mills-1', //every chapter must have a unique id name
        image: 'images/image-9.jpg',
        title: 'Timber Delivery',
        description:'After the wood was delivered downstream, it would end at a sawmill. Although much of the timber driven down the Penobscot was also processed in Hampden, Orono, and Old Town, sawmills like Morse & Co. in Bangor were a common site along all riverways. After the logs were processed, they were sent out by train or ship to market.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.761, 44.8],
            zoom: 12.5,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 10.1/////////////////////
    {
        id: 'c10-mills-2', //every chapter must have a unique id name
        image: 'images/image-10.jpg',
        title: 'The Mills',
        description:'See another version of this great map hosted by <a href="https://oshermaps.org/browse-maps?id=104873">Osher Map Library</a> for a detailed view of Bangor in the late 1800s. Remember to view full screen and pan around. Also, follow this link for a detailed look at the Sanborn maps that show the Morse & Co. mills of the late 1800s and early 1900s. The next few frames show the geographic spread of different mills 130 years apart.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.761, 44.8],
            zoom: 12.5,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'franco-maine-stories-630d4osh', //name of layer as it's found in the refrenced style
              opacity: 0.5
          }
        ],
        onChapterExit: [
          {
              layer: 'franco-maine-stories-630d4osh', //name of layer as it's found in the refrenced style
              opacity: 0.6
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 10.2/////////////////////
    {
        id: 'c10-2-mills-3', //every chapter must have a unique id name
        image: 'images/image-10-2.jpg',
        title: 'Bangor & Other Mill Towns',
        description:'This is what Bangor looked like in 1885. Notice...',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.765, 44.8],
            zoom: 15,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'franco-maine-stories-630d4osh', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'franco-maine-stories-630d4osh', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 11/////////////////////
    {
        id: 'c11-mills-statewide-1', //every chapter must have a unique id name
        image: 'images/image-11.jpg',
        title: 'Mills of the 1870s',
        description:'Early mills sprouted up along the river edges to meet demand for lumber; waterways both supplied transportation and processing power. Throughout the 1800s mills shifted from processing pine to spruce and hemlock. These water-powered mills were later supplanted by pulp factories and mechanization in the modern era.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.2, 45.43],
            zoom: 6.66,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'sawmills-old-07b36l', //name of layer as it's found in the refrenced style
              opacity: 1
          }
        ],
        onChapterExit: [
          {
              layer: 'sawmills-old-07b36l', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 12/////////////////////
    {
        id: 'c12-mills-statewide-2', //every chapter must have a unique id name
        image: 'images/image-12.jpg',
        title: 'Mills of the 2000s',
        description:'While early lumbering was almost exclusively done for sawlogs, the 1900s saw a diversification of demand. Pulpwood caused the greatest shift in terms of volume, though many local sawmills still meet demand for dimension-lumber today. Recent years have also seen a demand for biomass production. Large-scale pulp mills, although not extinct, have been in decline since the early 2000s.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.2, 45.43],
            zoom: 6.66,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'papermills-now-bvgtoe', //name of layer as it's found in the refrenced style
              opacity: 1
          }
        ],
        onChapterExit: [
          {
              layer: 'papermills-now-bvgtoe', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
    },
////////////////////////////////////////
    //////////Chapter 13/////////////////////
    {
        id: 'c13-madawaska-1', //every chapter must have a unique id name
        image: 'images/image-13.jpg',
        title: 'Spotlight: Madawaska, Aroostook County',
        description:'Despite all of the ways the industry changed throughout the 1900s, Franco-Americans found that they still had to assert themselves in the workplace. The 70s, in particular, were a tumultuous time for those employed in the paper industry. In 1971, the Acadian workers of Madawaska, for instance, clashed with the new management of Fraser Mill.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.1, 47.3],
            zoom: 9,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'maine-1hamoq', //name of layer as it's found in the refrenced style
              opacity: 0.7
          }
        ],
        onChapterExit: [
          {
              layer: 'maine-1hamoq', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
      },
      ////////////////////////////////////////
          //////////Chapter 14/////////////////////
  {
      id: 'c14-madawaska-2', //every chapter must have a unique id name
      image: 'images/image-14.png',
      title: 'The Strike at Fraser Paper',
      description:'The management was Anglo, English-speaking and had been hired for a restructuring, but they knew little of the mill’s functions or its culture. When the management team failed to hold up their part of a union contract, tensions boiled over into a strike. The strike remained peaceful until the management decided to load and ship the paper off themselves. This brought the fight to the railway track where strikers physically blockaded the tracks with pulpwood and their own bodies. Soon the state police were called in by Governor Kenneth Curtis; they deployed teargas which instigated a full blown riot. After the destruction of a couple of police cruisers and part of a train engine, Governor Curtis called off the State Police and the situation rapidly de-escalated. Negotiations with the unions finally began. For a full account of this story, listen to <a href="https://www.mainepublic.org/show/2-pm-public-affairs-programs/2016-09-02/listen-the-story-of-the-strike-at-fraser-paper">this story on the Fraser Strike</a>.',
      location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
          center: [-68.321, 47.36],
          zoom: 12.8,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [
        {
            layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
            opacity: 0
        }
      ],
      onChapterExit: [
        {
            layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
            opacity: 0
        }
      ]
    },
////////////////////////////////////////
    //////////Chapter 15/////////////////////
    {
        id: 'c15-last-log-drive', //every chapter must have a unique id name
        image: 'images/image-14.jpg',
        title: 'The Last Log Drive',
        description:'The last log drive happened in 1976 on the Kennebec River. Though memories of that era are still strong, all logging in Maine is now transported via truck and rail. There were many factors that contributed to the change—aside from the work of environmentalists, there were economic incentives as well. Moving logs could be done year round with a truck and the timber could be driven to mills and factories that need not be bound to a riverbank. The industry mechanized throughout the 1900s, and continues to change with the technology of the day.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.2, 45.43],
            zoom: 6.66,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ],
        onChapterExit: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
      },
////////////////////////////////////////
    //////////Chapter 16/////////////////////
    {
        id: 'c16-logging-today', //every chapter must have a unique id name
        image: 'images/image-16.jpg',
        title: 'Logging Today',
        description:'In 2018, 27% of Maine’s exports came from forest products. Much of Maine is still covered in workable woods, employing many from all parts of the state. While chainsaws and skidders have replaced the two-man saw and ox teams, lumbering still remains an important part of Maine’s culture.',
        location: {  /* go to 'https://demos.mapbox.com/location-helper/' to aquire location info'*/
            center: [-68.2, 45.43],
            zoom: 6.66,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ],
        onChapterExit: [
          {
              layer: 'eastbranchpath-5tdc84', //name of layer as it's found in the refrenced style
              opacity: 0
          }
        ]
      },
]
};
