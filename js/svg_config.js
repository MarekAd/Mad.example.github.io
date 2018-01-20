function load_svg() {
      console.log('SVG function init');
      //event.preventDefault();
       var size = 0.65 * window.innerHeight;
       var iconSize = 0.15 * size;

       var entries = [

          { image: './img/marek/svg_images/Javascript.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/jasmine.png', width: iconSize, height: iconSize,   tooltip: 'basic' },
          { image: './img/marek/svg_images/css3.png', width: iconSize, height: iconSize,   tooltip: 'basic' },
          { image: './img/marek/svg_images/forms.png', width: iconSize, height: iconSize,   tooltip: 'advanced' },
          { image: './img/marek/svg_images/git.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/github.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/html.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/jquery.gif', width: iconSize, height: iconSize,   tooltip: 'basic' },
          { image: './img/marek/svg_images/oracledatabase.png', width: iconSize, height: iconSize,   tooltip: 'advanced' },
          { image: './img/marek/svg_images/svn.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/sass.png', width: iconSize, height: iconSize,   tooltip: 'basic' },
          { image: './img/marek/svg_images/bootstrap3.png', width: iconSize, height: iconSize,   tooltip: 'intermediate' },
          { image: './img/marek/svg_images/ajax.png', width: iconSize, height: iconSize,   tooltip: 'basic' },
          { image: './img/marek/svg_images/plsql.png', width: iconSize, height: iconSize,   tooltip: 'advanced' },
          { image: './img/marek/svg_images/rwd.png', width: 1.25*iconSize, height: 1.25*iconSize,   tooltip: 'advanced' },
          { image: './img/marek/svg_images/sql.png', width: iconSize, height: iconSize,   tooltip: 'advanced' }
       ];

       var settings = {

           entries: entries,
           width: size,
           height: size,
           radius: '70%',
           radiusMin: 60,
           bgDraw: true,
           bgColor: '#f8f9fa',
           opacityOver: 1.00,
           opacityOut: 0.8,
           opacitySpeed: 6,
           fov: 800,
           speed: 0.25,
           fontFamily: 'proxima nova light", "Helvetica Neue", Helvetica, Arial, Sans-serif',
           fontSize: '17',
           fontColor: '#B64B00',
           fontWeight: 'bold',//bold
           fontStyle: 'normal',//italic
           fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
           fontToUpperCase: true,
           tooltipFontFamily: 'Oswald, Arial, sans-serif',
           tooltipFontSize: '11',
           tooltipFontColor: '#B64B00',
           tooltipFontWeight: 'normal',//bold
           tooltipFontStyle: 'normal',//italic
           tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
           tooltipFontToUpperCase: true,
           tooltipTextAnchor: 'center',
           tooltipDiffX: 0,
           tooltipDiffY: 2

       };

       //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
       $( '#holder' ).svg3DTagCloud( settings );
       $('#holder').click(function(e){
            e.preventDefault();
         })
};
