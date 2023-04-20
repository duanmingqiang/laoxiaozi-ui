<template>
  <div style="width: 500px; height: 300px;">
    <div class="canvas" ref="canvas" style="width: 100%; height: 100%;"></div>
    <player />
  </div>
</template>

<script>

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css' // 样式

const str = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
<bpmn2:process id="Process_1" isExecutable="false">
  <bpmn2:startEvent id="StartEvent_1" />
</bpmn2:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
  <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
      <dc:Bounds x="192" y="82" width="36" height="36" />
    </bpmndi:BPMNShape>
  </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn2:definitions>`
import BpmnModeler from 'bpmn-js/lib/Modeler'
import CustomPalette from './custom'
// 自定义的属性解析文件
import SelfDescriptor from "./SelfDescriptor.json";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      bpmn: null
    }
  },
  mounted() {
    this.bpmn = window.BpmnModeler =  new BpmnModeler({
      container: this.$refs.canvas,
      additionalModules: [ CustomPalette ],
      moddleExtensions: {self: SelfDescriptor}
    })
    this.bpmn.importXML(str)

    var eventBus = this.bpmn.get('eventBus');
    eventBus.on('element.click', function(evt) { 
      console.log(evt, evt.element.id, evt.element.type, evt.element.businessObject.name)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* app.css */
.bpmn-icon-task.red {
    color: #cc0000 !important;
}


</style>
