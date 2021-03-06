/** File: bootstrap3.js
 * Candy Plugin Left Tabs + Bootstrap3 Layout
 * Author: Melissa Adamaitis <melissa@melissanoelle.com>
 */

var CandyShop = (function(self) { return self; }(CandyShop || {}));

CandyShop.LeftTabs = (function(self, Candy, $) {
  /** Object: about
   *
   * Contains:
   *  (String) name - Candy Plugin Layout with Left Tabs + Bootstrap3
   *  (Float) version - Candy Plugin Layout with Left Tabs + Bootstrap3
   */
  self.about = {
    name: 'Candy Plugin Layout with Left Tabs + Bootstrap3',
    version: '1.0'
  };

  /**
   * Initializes the bootstrap3 plugin with the default settings.
   */
  self.init = function(){
    Candy.View.Template.Chat = {
      pane: '<div class="row" id="chat-pane">{{> tabs}}{{> toolbar}}{{> rooms}}</div>{{> modal}}',
      rooms: '<div id="chat-rooms" class="rooms"></div>',
      tabs: '<div id="left-menu-wrapper"><ul data="melwashere" id="chat-tabs"></ul></div>',
      tab: '<li class="roomtype-{{roomType}}" data-roomjid="{{roomJid}}" data-roomtype="{{roomType}}">' +
          '<a href="#" class="label">{{#privateUserChat}}<span class="glyphicon glyphicon-user"></span> {{/privateUserChat}}{{name}}</a>' +
          '<a href="#" class="transition"></a><a href="#" class="close">\u00D7</a>' +
          '<small class="unread"></small></li>',
      modal: '<div id="chat-modal"><a id="admin-message-cancel" class="close" href="#">\u00D7</a>' +
          '<span id="chat-modal-body"></span>' +
          '<img src="{{resourcesPath}}img/modal-spinner.gif" id="chat-modal-spinner" />' +
          '</div><div id="chat-modal-overlay"></div>',
      adminMessage: '<li><small>{{time}}</small><div class="adminmessage">' +
          '<span class="label">{{sender}}</span>' +
          '<span class="spacer">▸</span>{{subject}} {{message}}</div></li>',
      infoMessage: '<li><small>{{time}}</small><div class="infomessage">' +
          '<span class="spacer">•</span>{{subject}} {{message}}</div></li>',
      toolbar: '<ul id="chat-toolbar">' +
          '<li id="emoticons-icon" data-tooltip="{{tooltipEmoticons}}"><span class="glyphicon glyphicon-asterisk"></span></li>' +
          '<li id="chat-sound-control" class="checked" data-tooltip="{{tooltipSound}}"><span class="glyphicon glyphicon-volume-up"></span><span class="glyphicon glyphicon-volume-off"></span>{{> soundcontrol}}</li>' +
          '<li id="chat-autoscroll-control" class="checked" data-tooltip="{{tooltipAutoscroll}}"><span class="glyphicon glyphicon-arrow-down"></span><span class="glyphicon glyphicon-ban-circle"></span></li>' +
          '<li class="checked" id="chat-statusmessage-control" data-tooltip="{{tooltipStatusmessage}}"><span class="glyphicon glyphicon-info-sign"></span><span class="glyphicon glyphicon-ban-circle"></span></li>' +
          '<li class="context" data-tooltip="{{tooltipAdministration}}"></li>' +
          '<li class="usercount" data-tooltip="{{tooltipUsercount}}"><span class="glyphicon glyphicon-user"></span>' +
          '<span id="chat-usercount"></span></li></ul>',
      soundcontrol: '<script type="text/javascript">var audioplayerListener = new Object();' +
              ' audioplayerListener.onInit = function() { };' +
              '</script><object id="chat-sound-player" type="application/x-shockwave-flash" data="{{resourcesPath}}audioplayer.swf"' +
              ' width="0" height="0"><param name="movie" value="{{resourcesPath}}audioplayer.swf" /><param name="AllowScriptAccess"' +
              ' value="always" /><param name="FlashVars" value="listener=audioplayerListener&amp;mp3={{resourcesPath}}notify.mp3" />' +
              '</object>',
      Context: {
        menu: '<div id="context-menu"><i class="arrow arrow-top"></i>' +
          '<ul></ul><i class="arrow arrow-bottom"></i></div>',
        menulinks: '<li class="{{class}}" id="context-menu-{{id}}">{{label}}</li>',
        contextModalForm: '<form action="#" id="context-modal-form">' +
                '<label for="context-modal-label">{{_label}}</label>' +
                '<input type="text" name="contextModalField" id="context-modal-field" />' +
                '<input type="submit" class="button" name="send" value="{{_submit}}" /></form>',
        adminMessageReason: '<a id="admin-message-cancel" class="close" href="#">×</a>' +
                '<p>{{_action}}</p>{{#reason}}<p>{{_reason}}</p>{{/reason}}'
      },
      tooltip: '<div id="tooltip"><i class="arrow arrow-top"></i>' +
            '<div></div><i class="arrow arrow-bottom"></i></div>'
    };

    // Make the message pane the full height of the window.
    self.heights();

    // Make sure that the window heights are the right size after the window is resized.
    $(window).resize(function() {
      self.heights();
    });

    // Make sure that the window heights are the right size after a new room is added.
    $(Candy).on('candy:view.room.after-add', function() {
      self.heights();
    });
  };

  self.heights = function() {
    var barless_height = $(window).height() - $('.message-form').height();
    $('.message-pane-wrapper').height(barless_height + 'px');
    $('.roster-pane').height(barless_height + 'px');
  }

  return self;
}(CandyShop.LeftTabs || {}, Candy, jQuery));
