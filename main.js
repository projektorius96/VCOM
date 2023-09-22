import './style.css';
import CONSTANTS from './src/Constants.js';
import { Node, Stage, Layer, Group, Shape, Rect } from './src/KonvaComponents/index.js';
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
    draggable: true,
    sceneFunc: function(...args){
      sceneFuncBound.call(this, ...args)
    }
  })
  ,
  rectBounds = new Rect({
    strokeWidth: 4,
    stroke: 'red',
  })

globalThis.defaultStage = new Stage( StageDefaults.getAttrs() ).add(

  globalThis.defaultLayer = new Layer( {name: Object.keys({Default} )[0] + Layer.name}).add(

    rectBounds,
    globalThis.defaultGroup = new Group( 
      {
        name: Object.keys({Default} )[0] + Group.name,
        x:0,
        y:0,
      }
    ).add(

      new Shape({
        ...BoundingBoxDefaults.getAttrs()
        ,
        fill: 'lightgreen'
      })
      ,
      new Shape({
        ...BoundingBoxDefaults.getAttrs()
        ,
        fill: 'orange'
      })
      ,
      new Shape({
        ...BoundingBoxDefaults.getAttrs()
        ,
        fill: 'grey'
      })
    )

  )

)

if(defaultGroup.hasChildren){

  let incrementalWidth = BoundingBoxDefaults.width();
  let incrementalHeight = 0;
  let defaultVerticalPadding = BoundingBoxDefaults.y();

  rectBounds.setAttrs( defaultGroup.getClientRect() )
  rectBounds.setAttr('height', (BoundingBoxDefaults.height()*defaultGroup.getChildren().length) )
  defaultGroup.getChildren().forEach((each)=>{
    each.setAttrs({
      y: incrementalHeight+defaultVerticalPadding,
    });
    incrementalHeight += BoundingBoxDefaults.height();
  })

}

