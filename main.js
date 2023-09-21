import './style.css';
import CONSTANTS from './src/Constants.js';
import { Node, Stage, Layer, Group, Shape } from './src/KonvaComponents/index.js';
import { sceneFuncBound } from './src/Callbacks/index.js';

const
  Default = ""
  ,
  StageDefaults = new Node({
    name: Object.keys({Default})[0] + Stage.name,
    container: document.body,
    width: CONSTANTS.VIEWPORT.FULL_VIEWPORT_WIDTH,
    height: CONSTANTS.VIEWPORT.FULL_VIEWPORT_HEIGHT,
  })
  , 
  BoundingBoxDefaults = new Node({
    name: 'DefaultBBox',
    x: 7/*  + (7 / 2) */,
    offsetX: -(7 / 2) ,
    y: 7,
    fill: '#FFFFFF',
    strokeWidth: 1,
    stroke: '#000000',
    width: StageDefaults.width() * 0.989,
    height: 64,
  })

globalThis.defaultStage = new Stage( StageDefaults.getAttrs() ).add(

  globalThis.defaultLayer = new Layer({name: Object.keys({Default})[0] + Layer.name}).add(

    globalThis.defaultGroup = new Group({name: Object.keys({Default})[0] + Group.name}).add(

      globalThis.defaultBBox = new Shape({

        ...BoundingBoxDefaults.getAttrs()
        ,
        sceneFunc: function(...args){
          sceneFuncBound.call(this, ...args)
        }

      })

    )

  )

)

