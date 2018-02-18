/*
 * imagewithcta/index.js
 * This file contains the code for the imagewithcta component.
 *
 * @project   Altria
 * @date      YYYY-MM-DD
 * @author    Vishnu, SapientRazorfish_
 * @site      DNG
 *
 */
var ImageWithCTAComponent = (function (window, undefined) {

    function ImageWithCTAComponent () {
      var dtmModuleObj,
        componentEle;
  
      var initializeElements = function () {
        dtmModuleObj = new DTMTrackingModule();
        componentEle = $('.image-cta-component');
  
        initializeComponents();
      };
  
      var initializeComponents = function () {
        componentEle.find('.imagecontent-rte a').each(function (){
          $(this).attr('data-dtm-imagwithecta', 'true');
          $(this).attr('data-dtmtext', $(this).text());
        });
        componentEle.find('.disclaimer a').each(function (){
          $(this).attr('data-dtm-imagwithecta', 'true');
          $(this).attr('data-dtmtext', $(this).text());
        });
  
  
        $('body').off('click', '[data-dtm-imagwithecta="true"]').on('click', '[data-dtm-imagwithecta="true"]', function (e) {
          var thisEle = $(this),
            linkEvent = 'internal-link-event',
            category = 'internal',
            dtmLabel = thisEle.attr('data-dtmlabel'),
            linkHref = thisEle.attr('href'),
            clickedText = thisEle.attr('data-dtmtext'),
            dcsuri = globalDcsUri;
  
          clickedText = (clickedText === '' || typeof clickedText === 'undefined')?dtmLabel : clickedText;
  
          /* istanbul ignore else*/
          if ( dtmModuleObj.isExternalLink(linkHref) ) {
            linkEvent = 'external-link-event';
            category = 'external';
            dcsuri = 'external-link';
          }
          var trackingJson = {
            link: {
              category: category,
              section: 'image',
              label: (typeof dtmLabel !== 'undefined')?dtmLabel:'',
              text: clickedText
            },
            page: {
              dcsuri: dcsuri + ':' + clickedText
            }
          };
          dtmModuleObj.dtmTracking(linkEvent, trackingJson, 'link');
        });
  
      };
  
      this.init = function () {
        initializeElements();
      };
    }
  
    return ImageWithCTAComponent;
  })(window);
  
  $(document).ready(function () {
    var imageWithCTA = new ImageWithCTAComponent();
    imageWithCTA.init();
  });
  var loadingError = function (thiss) {
    $(thiss).parents('.with-image').removeClass('with-image');
  };
  