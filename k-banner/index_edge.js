/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
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
                fill: ["rgba(170,230,251,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bg2',
                type: 'image',
                rect: ['-259px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg2.png",'0px','0px']
            },
            {
                id: 'bulud-pinqivin2',
                type: 'image',
                rect: ['0px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bulud-pinqivin2.png",'0px','0px']
            },
            {
                id: '_012',
                type: 'image',
                rect: ['-259px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"012.png",'0px','0px']
            },
            {
                id: 'bulud-bottom2',
                type: 'image',
                rect: ['-259px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bulud-bottom2.png",'0px','0px']
            },
            {
                id: 'blud-top2',
                type: 'image',
                rect: ['-259px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blud-top2.png",'0px','0px']
            },
            {
                id: 'kondisioner2',
                type: 'image',
                rect: ['-259px', '-849px','800px','1560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"kondisioner2.png",'0px','0px']
            },
            {
                id: 'logo2',
                type: 'image',
                rect: ['62px', '60px','184px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
            },
            {
                id: 'LG-logo2',
                type: 'image',
                rect: ['135px', '40px','111px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LG-logo2.png",'0px','0px']
            },
            {
                id: 'phone',
                type: 'image',
                rect: ['0', '-20px','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phone.png",'0px','0px']
            },
            {
                id: 'mesaj-2',
                type: 'image',
                rect: ['0', '60px','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mesaj-2.png",'0px','0px']
            },
            {
                id: 'mesaj-1',
                type: 'image',
                rect: ['0', '60px','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mesaj-1.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_phone}": [
                ["style", "top", '70px'],
                ["style", "opacity", '1']
            ],
            "${__012}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '-259px'],
                ["style", "width", '800px']
            ],
            "${_logo2}": [
                ["style", "top", '10px'],
                ["style", "height", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '62px'],
                ["style", "width", '184px']
            ],
            "${_mesaj-1}": [
                ["style", "top", '-80px'],
                ["style", "opacity", '1']
            ],
            "${_LG-logo2}": [
                ["style", "top", '-10px'],
                ["style", "height", '83px'],
                ["style", "opacity", '0'],
                ["style", "left", '135px'],
                ["style", "width", '111px']
            ],
            "${_blud-top2}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '-259px'],
                ["style", "width", '800px']
            ],
            "${_mesaj-2}": [
                ["style", "top", '60px'],
                ["style", "opacity", '0']
            ],
            "${_kondisioner2}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '-259px'],
                ["style", "width", '800px']
            ],
            "${_bulud-bottom2}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '-259px'],
                ["style", "width", '800px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(170,230,251,1.00)'],
                ["style", "opacity", '1']
            ],
            "${_bg2}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '-259px'],
                ["style", "width", '800px']
            ],
            "${_bulud-pinqivin2}": [
                ["style", "top", '-849px'],
                ["style", "height", '1560px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '800px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid33", tween: [ "style", "${_bg2}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid59", tween: [ "style", "${_bg2}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 },
                { id: "eid22", tween: [ "style", "${_bulud-pinqivin2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid106", tween: [ "style", "${_bulud-pinqivin2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid18", tween: [ "style", "${_bg2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid103", tween: [ "style", "${_bg2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid40", tween: [ "style", "${_blud-top2}", "left", '-6px', { fromValue: '-259px'}], position: 3000, duration: 500 },
                { id: "eid71", tween: [ "style", "${_blud-top2}", "left", '-83px', { fromValue: '-6px'}], position: 5000, duration: 500 },
                { id: "eid39", tween: [ "style", "${_blud-top2}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid53", tween: [ "style", "${_blud-top2}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid31", tween: [ "style", "${_bg2}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid51", tween: [ "style", "${_bg2}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid34", tween: [ "style", "${__012}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid60", tween: [ "style", "${__012}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid48", tween: [ "style", "${_kondisioner2}", "left", '-6px', { fromValue: '-259px'}], position: 3000, duration: 500 },
                { id: "eid73", tween: [ "style", "${_kondisioner2}", "left", '-83px', { fromValue: '-6px'}], position: 5000, duration: 500 },
                { id: "eid41", tween: [ "style", "${_blud-top2}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid63", tween: [ "style", "${_blud-top2}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 },
                { id: "eid25", tween: [ "style", "${_bulud-pinqivin2}", "left", '-260px', { fromValue: '0px'}], position: 500, duration: 2500 },
                { id: "eid44", tween: [ "style", "${_bulud-pinqivin2}", "left", '-7px', { fromValue: '-260px'}], position: 3000, duration: 500 },
                { id: "eid72", tween: [ "style", "${_bulud-pinqivin2}", "left", '-84px', { fromValue: '-7px'}], position: 5000, duration: 500 },
                { id: "eid32", tween: [ "style", "${_bg2}", "left", '-6px', { fromValue: '-259px'}], position: 3000, duration: 500 },
                { id: "eid69", tween: [ "style", "${_bg2}", "left", '-83px', { fromValue: '-6px'}], position: 5000, duration: 500 },
                { id: "eid16", tween: [ "style", "${__012}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid109", tween: [ "style", "${__012}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid46", tween: [ "style", "${_kondisioner2}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid66", tween: [ "style", "${_kondisioner2}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid29", tween: [ "style", "${_bulud-bottom2}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid57", tween: [ "style", "${_bulud-bottom2}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 },
                { id: "eid45", tween: [ "style", "${_bulud-pinqivin2}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid65", tween: [ "style", "${_bulud-pinqivin2}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 },
                { id: "eid95", tween: [ "style", "${_LG-logo2}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 500 },
                { id: "eid107", tween: [ "style", "${_LG-logo2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid26", tween: [ "style", "${_bulud-bottom2}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid56", tween: [ "style", "${_bulud-bottom2}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid105", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid79", tween: [ "style", "${_mesaj-2}", "opacity", '1', { fromValue: '0'}], position: 5289, duration: 500 },
                { id: "eid104", tween: [ "style", "${_mesaj-2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid24", tween: [ "style", "${_kondisioner2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid108", tween: [ "style", "${_kondisioner2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid99", tween: [ "style", "${_phone}", "top", '-20px', { fromValue: '70px'}], position: 8000, duration: 500 },
                { id: "eid42", tween: [ "style", "${_bulud-pinqivin2}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid64", tween: [ "style", "${_bulud-pinqivin2}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid81", tween: [ "style", "${_mesaj-2}", "top", '140px', { fromValue: '60px'}], position: 8000, duration: 500 },
                { id: "eid97", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 500 },
                { id: "eid102", tween: [ "style", "${_logo2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid47", tween: [ "style", "${_kondisioner2}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid55", tween: [ "style", "${_kondisioner2}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid14", tween: [ "style", "${_bulud-bottom2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid100", tween: [ "style", "${_bulud-bottom2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid20", tween: [ "style", "${_blud-top2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid101", tween: [ "style", "${_blud-top2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid38", tween: [ "style", "${_blud-top2}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid62", tween: [ "style", "${_blud-top2}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid91", tween: [ "style", "${_LG-logo2}", "top", '40px', { fromValue: '-10px'}], position: 8000, duration: 500 },
                { id: "eid77", tween: [ "style", "${_mesaj-1}", "top", '60px', { fromValue: '-80px'}], position: 5072, duration: 500 },
                { id: "eid80", tween: [ "style", "${_mesaj-1}", "top", '140px', { fromValue: '60px'}], position: 8000, duration: 500 },
                { id: "eid43", tween: [ "style", "${_bulud-pinqivin2}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid54", tween: [ "style", "${_bulud-pinqivin2}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid111", tween: [ "style", "${_phone}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid36", tween: [ "style", "${__012}", "left", '-6px', { fromValue: '-259px'}], position: 3000, duration: 500 },
                { id: "eid70", tween: [ "style", "${__012}", "left", '-83px', { fromValue: '-6px'}], position: 5000, duration: 500 },
                { id: "eid110", tween: [ "style", "${_mesaj-1}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid93", tween: [ "style", "${_logo2}", "top", '60px', { fromValue: '10px'}], position: 8000, duration: 500 },
                { id: "eid27", tween: [ "style", "${_bulud-bottom2}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid50", tween: [ "style", "${_bulud-bottom2}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid35", tween: [ "style", "${__012}", "top", '-4px', { fromValue: '-849px'}], position: 3000, duration: 500 },
                { id: "eid52", tween: [ "style", "${__012}", "top", '217px', { fromValue: '-4px'}], position: 5000, duration: 500 },
                { id: "eid37", tween: [ "style", "${__012}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid61", tween: [ "style", "${__012}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 },
                { id: "eid28", tween: [ "style", "${_bulud-bottom2}", "left", '-6px', { fromValue: '-259px'}], position: 3000, duration: 500 },
                { id: "eid68", tween: [ "style", "${_bulud-bottom2}", "left", '-83px', { fromValue: '-6px'}], position: 5000, duration: 500 },
                { id: "eid30", tween: [ "style", "${_bg2}", "height", '609px', { fromValue: '1560px'}], position: 3000, duration: 500 },
                { id: "eid58", tween: [ "style", "${_bg2}", "height", '864px', { fromValue: '609px'}], position: 5000, duration: 500 },
                { id: "eid49", tween: [ "style", "${_kondisioner2}", "width", '312px', { fromValue: '800px'}], position: 3000, duration: 500 },
                { id: "eid67", tween: [ "style", "${_kondisioner2}", "width", '443px', { fromValue: '312px'}], position: 5000, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-16851221");
