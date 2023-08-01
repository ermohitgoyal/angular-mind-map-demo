import { MindMapMain } from 'angular-mindmap';
import { Component, OnInit } from '@angular/core';

//import $ from 'jquery';

const HIERARCHY_RULES = {
  ROOT: {
    getChildren: () => [],
  },
};

const option = {
  container: 'jsmind_container',
  theme: 'primary',
  editable: false,
  depth: 20,
  hierarchyRule: HIERARCHY_RULES,
  view: {
    hmargin: 10, //The minimum horizontal distance between the mind map and the outer frame of the container
    vmargin: 50, // The minimum vertical distance between the mind map and the outer frame of the container
    line_width: 0, // Mind map line thickness
    line_color: '#00ff00', // Mind map line color
  },
  layout: {
    pspace: 14, // To remove expand/collapse buttons for all the nodes
  },
  support_html: false,
};

const mind = {
  format: 'nodeTree',
  data: {
    id: 43,
    topic: 'ABC',
    selectedType: false,
    backgroundColor: '#7EC6E1',
    children: [
      {
        id: 80,
        color: '#fff',
        topic: 'show room',
        direction: 'right',
        selectedType: 'CED',
        backgroundColor: '#616161',
        children: [],
      },
      {
        id: 44,
        color: '#fff',
        topic: 'ERT',
        direction: 'right',
        selectedType: 'EDF',
        backgroundColor: '#616161',
        children: [
          {
            id: 46,
            color: '#fff',
            topic: 'EEE',
            direction: 'right',
            selectedType: 'RTG',
            backgroundColor: '#989898',
            children: [
              {
                id: 49,
                color: '#fff',
                topic: 'RGF',
                direction: 'right',
                selectedType: 'FGH',
                backgroundColor: '#C6C6C6',
                children: [],
              },
              {
                id: 51,
                color: '#fff',
                topic: 'RTGH',
                direction: 'right',
                selectedType: 'TYHG',
                backgroundColor: '#C6C6C6',
                children: [],
              },
              {
                id: 47,
                color: '#fff',
                topic: 'RTGF',
                direction: 'right',
                selectedType: 'RTTGF',
                backgroundColor: '#C6C6C6',
                children: [],
              },
              {
                id: 48,
                color: '#fff',
                topic: 'RRTGF',
                direction: 'right',
                selectedType: 'RTGFD',
                backgroundColor: '#C6C6C6',
                children: [],
              },
              {
                id: 50,
                color: '#fff',
                topic: 'SDFG',
                direction: 'right',
                selectedType: 'WERT',
                backgroundColor: '#C6C6C6',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 45,
        color: '#fff',
        topic: 'ASDF',
        direction: 'right',
        selectedType: 'ASDFG',
        backgroundColor: '#616161',
        children: [],
      },
    ],
  },
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  mindMap;
  ngOnInit() {
    this.mindMap = MindMapMain.show(option, mind);

    // $("#jsmind_container jmnode").click( function(){
    //   console.log( $(this).attr("nodeid") + "---- " + $(this).text());
    //   console.log( $(this).html());
    //   //console.log( $(this).html().split('<p ')[1].split('>')[1].replace('</p','')   );
    // });
  }

  removeNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;

    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }

  addNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    if (!selectedNode) {
      return;
    }

    //const nodeId = customizeUtil.uuid.newid();
    //this.mindMap.addNode(selectedNode, nodeId);
  }

  getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }
}
