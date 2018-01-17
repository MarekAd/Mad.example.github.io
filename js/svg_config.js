
function load_svg() {
        console.log('SVG function init');
       var entries = [

           { image: './img/svg/Javascript-shield.png', width: '100', height: '100', target: '_top', tooltip: 'basic' },
           { image: './img/Briefcase.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Dolor sit amet' },
           { image: './img/Brush.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Consetetur sadipscing' },
           { image: './img/Calendar.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Sed diam' },
           { image: './img/Camera.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'At vero' },
           { image: './img/Cassette.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Nonumy eirmod' },
           { image: './img/Clock.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Stet clita' },
           { image: './img/Cloud_Download.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Justo duo' },
           { image: './img/Cloud_Upload.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Ut wisi enim' },
           { image: './img/Coffee.png', width: '50', height: '50', url: 'http://jquery-plugins.net/', target: '_top', tooltip: 'Minim veniam' }

       ];

       var settings = {

           entries: entries,
           width: 480,
           height: 480,
           radius: '65%',
           radiusMin: 90,
           bgDraw: true,
           bgColor: '#fff',
           opacityOver: 1.00,
           opacityOut: 0.8,
           opacitySpeed: 6,
           fov: 800,
           speed: 0.25,
           fontFamily: 'Oswald, Arial, sans-serif',
           fontSize: '15',
           fontColor: '#222',
           fontWeight: 'normal',//bold
           fontStyle: 'normal',//italic
           fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
           fontToUpperCase: true,
           tooltipFontFamily: 'Oswald, Arial, sans-serif',
           tooltipFontSize: '11',
           tooltipFontColor: '#222',
           tooltipFontWeight: 'normal',//bold
           tooltipFontStyle: 'normal',//italic
           tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
           tooltipFontToUpperCase: true,
           tooltipTextAnchor: 'left',
           tooltipDiffX: 0,
           tooltipDiffY: 10

       };

       //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
       //$( '#holder' ).svg3DTagCloud( settings );

};
