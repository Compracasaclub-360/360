var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-comedor",
      "name": "Sala comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.9797364474026846,
        "pitch": -0.03120888928052601,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.464822248194129,
          "pitch": 0.12567961202589117,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 0.692155694169486,
          "pitch": 0.08317799716677499,
          "rotation": 0,
          "target": "10-balcn-vista-2-"
        },
        {
          "yaw": -3.081499843122316,
          "pitch": 0.0938935292903853,
          "rotation": 0,
          "target": "1-sala-1"
        },
        {
          "yaw": 1.9396667735486997,
          "pitch": 0.05323350383969938,
          "rotation": 0,
          "target": "6-habitacin-1"
        },
        {
          "yaw": 2.1856205996555174,
          "pitch": 0.015723433934548225,
          "rotation": 0,
          "target": "4-bao-de-visitas"
        },
        {
          "yaw": 2.3804259501469485,
          "pitch": 0.012457718995442235,
          "rotation": 0,
          "target": "5-habitacin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-1",
      "name": "Sala 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6170194751228948,
          "pitch": 0.403976711918256,
          "rotation": 0,
          "target": "0-sala-comedor"
        },
        {
          "yaw": 0.46920431382078576,
          "pitch": 0.10384818801563611,
          "rotation": 0,
          "target": "10-balcn-vista-2-"
        },
        {
          "yaw": 0.8690846189129093,
          "pitch": 0.029165223502486626,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48219470266864306,
          "pitch": 0.0030508100121373616,
          "rotation": 0,
          "target": "3-cuarto-de-servicio"
        },
        {
          "yaw": -1.4465756158552523,
          "pitch": 0.15440289600171297,
          "rotation": 0,
          "target": "10-balcn-vista-2-"
        },
        {
          "yaw": -2.693085677786218,
          "pitch": 0.17619124463413982,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuarto-de-servicio",
      "name": "Cuarto de servicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.107216116744336,
          "pitch": 0.13105842747055974,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao-de-visitas",
      "name": "Baño de visitas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7134953600536633,
          "pitch": 0.12513576548351324,
          "rotation": 0,
          "target": "5-habitacin-2"
        },
        {
          "yaw": 0.23132113255882913,
          "pitch": 0.026535146204244242,
          "rotation": 0,
          "target": "0-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-habitacin-2",
      "name": "Habitación 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5372110908767844,
          "pitch": 0.0039879268961868775,
          "rotation": 0,
          "target": "0-sala-comedor"
        },
        {
          "yaw": 2.696697889144458,
          "pitch": 0.009235617133535712,
          "rotation": 0,
          "target": "4-bao-de-visitas"
        },
        {
          "yaw": 3.109212751124385,
          "pitch": -0.019823488478078133,
          "rotation": 0,
          "target": "6-habitacin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-habitacin-1",
      "name": "Habitación 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37398768924161985,
          "pitch": 0.006410553172198519,
          "rotation": 0,
          "target": "7-closet-"
        },
        {
          "yaw": 0.7509235233888294,
          "pitch": -0.005035025708668428,
          "rotation": 0,
          "target": "8-bao"
        },
        {
          "yaw": 1.598524981880388,
          "pitch": 0.06370950350353866,
          "rotation": 0,
          "target": "0-sala-comedor"
        },
        {
          "yaw": 3.0974366770975,
          "pitch": 0.025092718358335375,
          "rotation": 0,
          "target": "9-balcn-vista-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-closet-",
      "name": "Closet ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6857806859056117,
          "pitch": 0.4112469555053089,
          "rotation": 0,
          "target": "6-habitacin-1"
        },
        {
          "yaw": 2.970745089072956,
          "pitch": -0.02795433024902394,
          "rotation": 0,
          "target": "9-balcn-vista-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.110156080209525,
          "pitch": -0.0496673213280161,
          "rotation": 0,
          "target": "10-balcn-vista-2-"
        },
        {
          "yaw": 2.1043274111282635,
          "pitch": 0.35680016146705995,
          "rotation": 0,
          "target": "6-habitacin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balcn-vista-1",
      "name": "Balcón vista 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7662113767877594,
          "pitch": 0.19968164783056075,
          "rotation": 0,
          "target": "6-habitacin-1"
        },
        {
          "yaw": 2.721848206983414,
          "pitch": 0.009361232206725134,
          "rotation": 0,
          "target": "10-balcn-vista-2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcn-vista-2-",
      "name": "Balcón vista 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.8707412037778504,
        "pitch": 0.05859873936351434,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -1.681200238073492,
          "pitch": -0.00306107803261213,
          "rotation": 0,
          "target": "9-balcn-vista-1"
        },
        {
          "yaw": -0.015101044728186963,
          "pitch": 0.0532887246676097,
          "rotation": 0,
          "target": "0-sala-comedor"
        },
        {
          "yaw": -0.5993038379376951,
          "pitch": 0.04456440123143146,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
