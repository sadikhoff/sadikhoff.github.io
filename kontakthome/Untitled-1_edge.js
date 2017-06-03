/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','300px','600px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Phones',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Phones.png",'0px','0px']
            },
            {
                id: 'Phone-inf',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Phone-inf.png",'0px','0px']
            },
            {
                id: 'Logo-2',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Logo-2.png",'0px','0px']
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '16px','83px','51px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Logo',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
            },
            {
                id: 'Garanty',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Garanty.png",'0px','0px']
            },
            {
                id: '_07',
                type: 'image',
                rect: ['118px', '92px','62px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"07.png",'0px','0px']
            },
            {
                id: '_06',
                type: 'image',
                rect: ['118px', '92px','57px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"06.png",'0px','0px']
            },
            {
                id: '_05',
                type: 'image',
                rect: ['118px', '92px','95px','74px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05.png",'0px','0px']
            },
            {
                id: '_04',
                type: 'image',
                rect: ['118px', '92px','98px','109px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04.png",'0px','0px']
            },
            {
                id: '_03',
                type: 'image',
                rect: ['118px', '92px','86px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"03.png",'0px','0px']
            },
            {
                id: '_02',
                type: 'image',
                rect: ['118px', '92px','108px','133px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"02.png",'0px','0px']
            },
            {
                id: '_01',
                type: 'image',
                rect: ['118px', '92px','69px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"01.png",'0px','0px']
            },
            {
                id: 'yazi2',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"yazi2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Garanty}": [
                ["style", "opacity", '0']
            ],
            "${_Rectangle2}": [
                ["style", "left", '0px'],
                ["style", "width", '83px']
            ],
            "${_yazi2}": [
                ["style", "opacity", '0']
            ],
            "${__01}": [
                ["style", "top", '92px'],
                ["style", "height", '104px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '69px']
            ],
            "${_Phone-inf}": [
                ["style", "opacity", '0']
            ],
            "${__03}": [
                ["style", "top", '92px'],
                ["style", "height", '105px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '86px']
            ],
            "${__06}": [
                ["style", "top", '92px'],
                ["style", "height", '103px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '57px']
            ],
            "${_Logo}": [
                ["style", "opacity", '0']
            ],
            "${_Logo-2}": [
                ["style", "left", '-101px'],
                ["style", "opacity", '1']
            ],
            "${__07}": [
                ["style", "top", '92px'],
                ["style", "height", '105px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '62px']
            ],
            "${__04}": [
                ["style", "top", '92px'],
                ["style", "height", '109px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '98px']
            ],
            "${__02}": [
                ["style", "top", '92px'],
                ["style", "height", '133px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '108px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "height", '600px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${__05}": [
                ["style", "top", '92px'],
                ["style", "height", '74px'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["style", "width", '95px']
            ],
            "${_Phones}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14250,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid44", tween: [ "style", "${__01}", "left", '6px', { fromValue: '118px'}], position: 2000, duration: 500 },
                { id: "eid8", tween: [ "style", "${_Phones}", "opacity", '1', { fromValue: '0'}], position: 10070, duration: 1370 },
                { id: "eid76", tween: [ "style", "${_Phones}", "opacity", '0', { fromValue: '1'}], position: 13505, duration: 500 },
                { id: "eid42", tween: [ "style", "${__01}", "width", '21px', { fromValue: '69px'}], position: 2000, duration: 500 },
                { id: "eid47", tween: [ "style", "${__02}", "top", '481px', { fromValue: '92px'}], position: 3450, duration: 500 },
                { id: "eid57", tween: [ "style", "${__05}", "top", '495px', { fromValue: '92px'}], position: 7310, duration: 500 },
                { id: "eid14", tween: [ "style", "${__04}", "opacity", '1', { fromValue: '0'}], position: 5075, duration: 500 },
                { id: "eid82", tween: [ "style", "${__04}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid72", tween: [ "style", "${__07}", "top", '484px', { fromValue: '92px'}], position: 9820, duration: 500 },
                { id: "eid56", tween: [ "style", "${__04}", "width", '34px', { fromValue: '98px'}], position: 6000, duration: 500 },
                { id: "eid4", tween: [ "style", "${_Logo-2}", "left", '0px', { fromValue: '-101px'}], position: 555, duration: 500 },
                { id: "eid73", tween: [ "style", "${__07}", "height", '35px', { fromValue: '105px'}], position: 9820, duration: 500 },
                { id: "eid46", tween: [ "style", "${__02}", "width", '31px', { fromValue: '108px'}], position: 3450, duration: 500 },
                { id: "eid12", tween: [ "style", "${__07}", "opacity", '1', { fromValue: '0'}], position: 8990, duration: 500 },
                { id: "eid75", tween: [ "style", "${__07}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid16", tween: [ "style", "${__06}", "opacity", '1', { fromValue: '0'}], position: 7765, duration: 500 },
                { id: "eid77", tween: [ "style", "${__06}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid59", tween: [ "style", "${__05}", "height", '24px', { fromValue: '74px'}], position: 7310, duration: 500 },
                { id: "eid6", tween: [ "style", "${_Garanty}", "opacity", '1', { fromValue: '0'}], position: 810, duration: 500 },
                { id: "eid81", tween: [ "style", "${_Garanty}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid79", tween: [ "style", "${_Logo-2}", "opacity", '0', { fromValue: '1'}], position: 13505, duration: 500 },
                { id: "eid54", tween: [ "style", "${__04}", "top", '481px', { fromValue: '92px'}], position: 6000, duration: 500 },
                { id: "eid18", tween: [ "style", "${__01}", "opacity", '1', { fromValue: '0'}], position: 1165, duration: 500 },
                { id: "eid84", tween: [ "style", "${__01}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid60", tween: [ "style", "${__05}", "width", '31px', { fromValue: '95px'}], position: 7310, duration: 500 },
                { id: "eid74", tween: [ "style", "${__07}", "width", '21px', { fromValue: '62px'}], position: 9820, duration: 500 },
                { id: "eid20", tween: [ "style", "${__02}", "opacity", '1', { fromValue: '0'}], position: 2395, duration: 500 },
                { id: "eid85", tween: [ "style", "${__02}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid22", tween: [ "style", "${__05}", "opacity", '1', { fromValue: '0'}], position: 6420, duration: 500 },
                { id: "eid83", tween: [ "style", "${__05}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid55", tween: [ "style", "${__04}", "height", '38px', { fromValue: '109px'}], position: 6000, duration: 500 },
                { id: "eid71", tween: [ "style", "${__07}", "left", '276px', { fromValue: '118px'}], position: 9820, duration: 500 },
                { id: "eid10", tween: [ "style", "${_Phone-inf}", "opacity", '1', { fromValue: '0'}], position: 1055, duration: 500 },
                { id: "eid78", tween: [ "style", "${_Phone-inf}", "opacity", '0', { fromValue: '1'}], position: 13505, duration: 500 },
                { id: "eid69", tween: [ "style", "${__06}", "height", '38px', { fromValue: '103px'}], position: 8610, duration: 500 },
                { id: "eid2", tween: [ "style", "${_Logo}", "opacity", '1', { fromValue: '0'}], position: 205, duration: 500 },
                { id: "eid80", tween: [ "style", "${_Logo}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid24", tween: [ "style", "${__03}", "opacity", '1', { fromValue: '0'}], position: 3865, duration: 500 },
                { id: "eid86", tween: [ "style", "${__03}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid51", tween: [ "style", "${__03}", "height", '38px', { fromValue: '105px'}], position: 4750, duration: 500 },
                { id: "eid53", tween: [ "style", "${__04}", "left", '145px', { fromValue: '118px'}], position: 6000, duration: 500 },
                { id: "eid52", tween: [ "style", "${__03}", "width", '31px', { fromValue: '86px'}], position: 4750, duration: 500 },
                { id: "eid58", tween: [ "style", "${__05}", "left", '192px', { fromValue: '118px'}], position: 7310, duration: 500 },
                { id: "eid70", tween: [ "style", "${__06}", "width", '21px', { fromValue: '57px'}], position: 8610, duration: 500 },
                { id: "eid49", tween: [ "style", "${__03}", "top", '482px', { fromValue: '92px'}], position: 4750, duration: 500 },
                { id: "eid62", tween: [ "style", "${__06}", "left", '243px', { fromValue: '118px'}], position: 8610, duration: 500 },
                { id: "eid43", tween: [ "style", "${__01}", "top", '487px', { fromValue: '92px'}], position: 2000, duration: 500 },
                { id: "eid88", tween: [ "style", "${_yazi2}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 500 },
                { id: "eid89", tween: [ "style", "${_yazi2}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 500 },
                { id: "eid61", tween: [ "style", "${__06}", "top", '482px', { fromValue: '92px'}], position: 8610, duration: 500 },
                { id: "eid41", tween: [ "style", "${__01}", "height", '32px', { fromValue: '104px'}], position: 2000, duration: 500 },
                { id: "eid50", tween: [ "style", "${__03}", "left", '102px', { fromValue: '118px'}], position: 4750, duration: 500 },
                { id: "eid48", tween: [ "style", "${__02}", "left", '51px', { fromValue: '118px'}], position: 3450, duration: 500 },
                { id: "eid45", tween: [ "style", "${__02}", "height", '38px', { fromValue: '133px'}], position: 3450, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1525624267");
