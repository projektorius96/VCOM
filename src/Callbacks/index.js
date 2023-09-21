export function sceneFuncBound (context, shape) {
    /* console.log(this === shape, context); */// [PASSED]
    context
        .beginPath()
        .rect(0, 0, shape.getAttr('width'), shape.getAttr('height'))
        .fillStrokeShape(shape); // (!) Konva specific method, it is very important
}