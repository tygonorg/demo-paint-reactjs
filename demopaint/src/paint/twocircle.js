/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'
import { linearDistance } from './utils';

const fabric = require('fabric').fabric;

class TwoCircle extends FabricCanvasTool {

    configureCanvas(props) {
        let canvas = this._canvas;
        canvas.isDrawingMode = canvas.selection = false;
        canvas.forEachObject((o) => o.selectable = o.evented = false);
        this._width = props.lineWidth;
        this._color = props.lineColor;
        this._fill = props.fillColor;
    }

    doMouseDown(o) {
        let canvas = this._canvas;
        this.isDown = true;
        let pointer = canvas.getPointer(o.e);
        [this.startX, this.startY] = [pointer.x, pointer.y];
        var circle = new fabric.Circle({
            left: this.startX, top: this.startY,
            originX: 'center', originY: 'center',
            strokeWidth: this._width,
            stroke: this._color,
            fill: this._fill,
            selectable: false,
            evented: false,
            radius: 50
        });
        var circle2 = new fabric.Circle({
            left: this.startX , top: this.startY,
            originX: 'center', originY: 'center',
            strokeWidth: this._width,
            stroke: this._color,
            fill: this._fill,
            selectable: false,
            evented: false,
            radius: 30
        });
        this.groupc  = new fabric.Group([circle, circle2], {
            left: this.startX,
            top: this.startY,
            angle: 0,
            selectable:true,
        });
        canvas.add(this.groupc);
       // canvas.add(this.circle);
       // canvas.add(this.circle2);
    }

    doMouseMove(o) {
        if (!this.isDown) return;
        let canvas = this._canvas;
        let pointer = canvas.getPointer(o.e);
        // this.circle.set({
        //     radius: linearDistance({ x: this.startX, y: this.startY }, { x: pointer.x, y: pointer.y }) / 2,
        //     angle: Math.atan2(pointer.y - this.startY, pointer.x - this.startX) * 180 / Math.PI
        // });
        // this.circle2.set({
        //     radius: linearDistance({ x: this.startX, y: this.startY }, { x: pointer.x, y: pointer.y }) / 2,
        //     angle: Math.atan2(pointer.y - this.startY, pointer.x - this.startX) * 180 / Math.PI
        // });
        //this.circle.setCoords();
        //this.circle2.setCoords();
        this.groupc.set(
            {
                radius: linearDistance({ x: this.startX, y: this.startY }, { x: pointer.x, y: pointer.y }) / 2,
                angle: Math.atan2(pointer.y - this.startY, pointer.x - this.startX) * 180 / Math.PI
            }
        );
        this.groupc.setCoords();
        canvas.renderAll();
    }

    doMouseUp(o) {
        this.isDown = false;
    }
}

export default TwoCircle;