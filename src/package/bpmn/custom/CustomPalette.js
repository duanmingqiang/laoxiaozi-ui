// CustomPalette.js
export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
        this.bpmnFactory = bpmnFactory;
        this.create = create;
        this.elementFactory = elementFactory;
        this.translate = translate;

        palette.registerProvider(this);
    }

    getPaletteEntries(element) {
        console.log('element', element)
        const {
            // bpmnFactory,
            create,
            // elementFactory,
            translate
        } = this;

        function createTask() {
            return function(event, eventObj) {
                console.log(event, eventObj)
                // const businessObject = bpmnFactory.create('bpmn:Task'); // 其实这个也可以不要
                // const shape = elementFactory.create({
                //     // type: 'bpmn:Task',
                //     // type: 'se:attrOne',
                //     type: 'se:attrOne',
                   
                //     // businessObject
                // });
                
                // shape.businessObject.name = 'hello'
                // console.log(shape) // 只在拖动或者点击时触发
                // create.start(event, shape);

                // let moddle = window.BpmnModeler.get("moddle")
                // const attrOne = window.BpmnModeler.get("moddle").create("se:AttrOne", { name: "testAttrOne", values: [] });
                // 原生扩展属性数组
                // const extensions = moddle.create("bpmn:ExtensionElements", { values: [] })
                // const extensions = moddle.create("bpmn:StartEvent", { values: [] })
                // let businessObject = element.businessObject
                // if (!businessObject.extensionElements) {
                //     businessObject.extensionElements = moddle.create('bpmn:ExtensionElements');
                //   }
              
                // businessObject.extensionElements.get('values').push(attrOne);
                // extensions.values.push(attrOne);
                // window.BpmnModeler.get("modeling").updateProperties(element, {
                //     extensionElements: extensions
                //   });
                // create.start(event, extensions)


                // const businessObject = bpmnFactory.create('bpmn:Task'); // 其实这个也可以不要
                // const shape = elementFactory.create({
                //     type: 'se:attrOne',
                // });
                const shape = window.BpmnModeler.get("moddle").create("se:AttrOne", { name: "testAttrOne", values: [] });
                create.start(event, shape);
            }
        }

        return {
            'create.lindaidai-task': {
                group: 'model',
                className: 'icon-custom  bpmn-icon-task red',
                title: translate('创建一个类型为lindaidai-task的任务节点'),
                action: {
                    dragstart: createTask(),
                    click: createTask()
                }
            }
        }
    }
}

CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
]
