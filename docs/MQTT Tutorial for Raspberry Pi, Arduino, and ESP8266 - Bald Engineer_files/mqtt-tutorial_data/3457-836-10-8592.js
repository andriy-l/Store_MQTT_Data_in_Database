
      (function(){
        olark.extend('Sounds');
olark.extend('GoogleAnalytics');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"Sounds":{"enabled":true},"system":{"require_phone":0,"feedback_survey_cancel_text":"Cancel","branding_link_text":"Powered by Olark","before_chat_text":"Ask James a Question","feedback_survey_question_operator_attitude_low":"Not at all friendly","disable_set_cookies":false,"allow_change_width":true,"allow_change_colors":true,"feedback_survey_question_5_text":"Question 5 of 5","show_end_popout":0,"hide_not_available":0,"file_type_error_text":"This file type is not allowed.","width":260,"restart_chat_offline_button_text":"Leave a message","inline_css_url_quirks":"static.olark.com/css/8/4/844fb02b40ed2e8b64b542b43ff5f68e.css","conversation_id_error_text":"File uploading is currently unavailable.","prechat_email_validation_message":"Please enter a valid email address","feedback_survey_question_2_text":"Question 2 of 5","habla_popout_text":"\u0026gt;","poll":false,"prechat_survey_website_placeholder":"Enter your website...","feedback_survey_question_operator_speed_low":"Not at all responsive","is_inline":0,"top_margin":0,"enable_buttons":1,"language":"en","habla_offline_sent_text":"Thanks for your message! ","hbl_cookie_path":"/","is_popup":0,"away_text":"Contact us","parse_links":1,"feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","offline_phone_validation_message":"Please enter a valid phone number","left_margin":20,"habla_sizebutton_text_compressed":"^","branding":"powered_by","start_habla_window_visible":false,"disableGoogleAnalytics":0,"habla_offline_email_text":"click here and type your Email","operator_has_stopped_typing_text":"has stopped typing","offline_survey_phone_label":"Phone","upload_rejected_error_text":"File uploading is currently unavailable.","disable_expand_text_input":false,"dismiss_message_text":"Dismiss","enableLanguageTranslation":false,"feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","hb_position":"left","file_size_error_text":"This file size is too large.","disable_default_visitor_information":0,"end_chat_button_text":"End Chat","show_away_as_header":0,"pre_chat_error_text":"Please enter your name and email in case we get disconnected.","feedback_survey_begin_button_text":"Rate Chat","prechat_survey_website_label":"Website","email_body_error_text":"Sorry, but I need an name and email address to get back to you.","offline_button_text":"Send James A Question (Offline)","default_localization":"en-US","not_available_text":"Send James A Question (Offline)","offline_survey_next_button_text":"Next","plugin_path":"https://static.olark.com/js/plugins/","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?","rtl":false,"disable_extra_br":true,"myname":"you","hb_dark_theme":false,"require_email":1,"feedback_survey_button_finish":"Finish","hb_show_as_tab":false,"resize_length":25,"close_hides_window":0,"input_height":20,"offline_msg_mode":1,"offline_survey_phone_placeholder":"Enter your phone number...","show_popout":0,"prechat_survey_name_placeholder":"Enter your name...","branding_panel_cancel_text":"Go back","offline_header_text":"Send James A Question (Offline)","google_analytics_domain":"auto","feedback_survey_question_1_text":"Question 1 of 5","height":155,"prechat_phone_validation_message":"Please enter a valid phone number","right_to_left":false,"feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","branding_panel_message_text":"10,000+ companies rely on Olark software to chat with customers directly.","feedback_survey_question_operator_attitude_high":"Extremely friendly","expandOnFirstMessageReceived":1,"visitor_id_error_text":"File uploading is currently unavailable.","feedback_survey_question_operator_speed_high":"Extremely responsive","offline_survey_name_label":"Name","offline_survey_submit_button_text":"Send","pre_chat_submit":"Click here to start chatting","busy_text":"Contact us","habla_sizebutton_text_expanded":"_","append_to_body":1,"habla_name_input_text":"click here and type your Name","flash_titlebar":1,"habla_offline_submit_value":"Send","prechat_survey_submit_button_text":"Start chatting","feedback_survey_question_chat_low":"Not at all satisfied","feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","flash_icons":1,"right_margin":20,"check_for_status":"Olark Chat (startup)","require_name":2,"offline_survey_email_placeholder":"Enter your email...","hb_show_button_text":false,"habla_end_popout_text":"","habla_special_div_show_type":"block","prechat_survey_phone_label":"Phone","show_pre_chat":0,"offline_message":"James isn't around, but you can still send a question. For project help, post it on a public forum and send me a link. (sorry, but I don't help with homework problems.)","expandOnMessageReceived":0,"bottom_margin":0,"feedback_survey_end_message":"Thank you for your feedback :)","online_header_text":"Now Chatting","send_transcript_title_text":"Send Transcript","offline_email_validation_message":"Please enter a valid email address","feedback_survey_question_chat_text":"How satisfied were you with this chat?","feedback_survey_question_4_text":"Question 4 of 5","branding_panel_link_text":"Try Olark on your site","require_offline_phone":0,"feedback_survey_button_next":"Next","use_theme":"bouncing_buzzard","send_transcript_error_text":"Please enter a valid email address","allowed_domains":"*.baldengineer.com,*.addohms.com","habla_offline_phone_text":"click here and type your Phone","url_handler_target_window":"_top","start_hidden":0,"habla_offline_body_text":"James isn't around, but you can still send a question. For project help, post it on a public forum and send me a link. (sorry, but I don't help with homework problems.)","panel_offset":20,"prechat_required_error_message":"Please complete all required fields","feedback_survey_complete_button_text":"Feedback Sent","cookie_path":"/","send_text":"Send","inline_css_url":"static.olark.com/css/3/9/3971c742ac2346c431f086113e61d518.css","offline_survey_name_placeholder":"Enter your name...","feedback_survey_button_submitting":"Submitting","busy_message":"All of our representatives are with other customers at this time. We will be with you shortly.","divid":"habla_window_div","hb_primary_color":"#5ba0d0","default_flash_on_icon":"https://static.olark.com/js/images/orange.ico","operator_is_typing_text":"is typing...","line_length":21,"rules":[{"kind":"Rule","actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Hi, we're here to answer any questions"}}],"whenOffline":false,"perPage":false,"clause":{"kind":"OrClause","clauses":[{"kind":"EqualsClause","left":{"kind":"VariableClause","varname":"visitor.pageCountForThisVisit"},"right":6}]},"whenOnline":true,"enabled":false,"id":2316,"perVisit":true,"description":"Start a chat after a customer has viewed 6 pages, so I can engage without being too intrusive","perVisitor":false},{"kind":"Rule","actions":[{"kind":"Action","method":"api.chat.updateVisitorNickname","options":{"snippet":"Returning Visitor"}}],"whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"kind":"GreaterThanClause","left":{"kind":"VariableClause","varname":"visitor.visitCount"},"right":1}]},"whenOnline":true,"enabled":false,"id":2317,"perVisit":true,"description":"Highlight returning visitors in my buddy list","perVisitor":false},{"kind":"Rule","actions":[{"kind":"Action","method":"api.box.hide","options":{}}],"whenOffline":true,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"kind":"EqualsClause","left":{"kind":"VariableClause","varname":"visitor.countryCode"},"right":"IN"}]},"whenOnline":true,"enabled":false,"id":2318,"perVisit":false,"description":"Hide chat for visitors from Zimbabwe since we cannot ship to them.","perVisitor":true},{"kind":"Rule","actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Bonjour, Comment allez-vous?"}}],"whenOffline":false,"perPage":false,"clause":{"kind":"AndClause","clauses":[{"kind":"EqualsClause","left":{"kind":"VariableClause","varname":"visitor.countryCode"},"right":"FR"}]},"whenOnline":true,"enabled":false,"id":"14657910168810","perVisit":true,"description":"Target my French visitors by sending a custom message in their language","perVisitor":false}],"disable_width":true,"prechat_survey_phone_placeholder":"Enter your phone number...","offline_website_validation_message":"Please enter a valid URL","start_visible":false,"sending_text":"sending","hashchange_events_trigger_page_change":0,"hb_disable_mobile":true,"offline_required_error_message":"Please complete all required fields","offline_survey_welcome_message":"We're not around but we still want to hear from you! Leave us a note:","feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","allow_mobile_boot":0,"in_chat_text":"Now Chatting","send_transcript_complete_button_text":"Transcript Sent","welcome_msg":"Questions? Let's chat about them.","show_away":0,"disable_offline_messaging_fallback":true,"default_flash_off_icon":"https://static.olark.com/js/images/white.ico","start_expanded":0,"offline_survey_email_label":"Email","offline_survey_thank_you_message":"Thanks for your message! We will have a member of our team contact you shortly.","popout_css_url":"static.olark.com/css/9/8/98c23c22d4700f33524c3faf5aa12bd2.css","habla_closebutton_text":"x","hide_when_away":0,"resize_input_height":60,"hide_min_max_buttons":0,"disable_get_cookies":false,"hb_enable_uploads":true,"offline_survey_website_label":"Website","restart_chat_online_button_text":"Start conversation","send_transcript_begin_button_text":"Send Transcript","feedback_survey_question_3_text":"Question 3 of 5","ended_chat_message":"This chat has ended, start typing below if you need anything else!","inline_css_url_ie":"static.olark.com/css/0/b/0b5c605cbc1c9745fb33b5e81c6184ad.css","prechat_survey_welcome_message":"Hi! Let\u2019s get some quick info so we can better serve you:","prechat_survey_email_placeholder":"Enter your email...","enable_google_analytics":false,"prechat_survey_next_button_text":"Next","prechat_website_validation_message":"Please enter a valid URL","processing_file_error_text":"There was a problem processing your file.","allow_change_height":true,"online_button_text":"Ask James a Question","local_user_display_name":"\u0026rarr;","pre_chat_message":"Hi, I am around, click 'start chatting' to contact me.","offline_survey_website_placeholder":"Enter your website...","send_transcript_cancel_text":"No Thanks","feedback_survey_question_additional_feedback_text":"Additional Feedback.","prechat_survey_name_label":"Name","generic_upload_error_text":"File uploading is currently unavailable.","send_transcript_placeholder":"Email","feedback_survey_question_chat_high":"Extremely satisfied","say_text":"Type here and hit enter to chat","corner_position":"BR","url_handler":"https://static.olark.com/jsclient-latest/follow.html?v=1426711435610","prechat_survey_email_label":"Email","hb_chatbox_size":"sm","hb_custom_style":{"general":{"secondaryColor":null,"corners":"soft"}},"show_in_buddy_list":"chatting","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj5Qb3dlcmVkIEJ5IDxhIGhyZWY9Imh0dHA6Ly93d3cub2xhcmsuY29tLz9yaWQ9MzQ1Ny04MzYtMTAtODU5MiZhbXA7cG93ZXJlZF9mPTEmYW1wO3V0bV9tZWRpdW09d2lkZ2V0JmFtcDt1dG1fY2FtcGFpZ249cG93ZXJlZF9ieV9mcmVlJmFtcDt1dG1fc291cmNlPTM0NTctODM2LTEwLTg1OTIiIGlkPSJoYmxpbms5OSIgdGFyZ2V0PSJfYmxhbmsiPk9sYXJrPC9hPg==","md5":"f5ce53ae65cc98f001299642a7664606","site_id":"3457-836-10-8592","template":"azul","operators":{"804239":{"avatar_url":"//static.olark.com/imageservice/69413201dbaae664bb3f969d3be38484.png"}}},"GoogleAnalytics":{"create_custom_tracker":false,"enabled":true,"enable_custom_variables":true,"had_conversation_page_slot_number":5,"load_ga_if_missing":false,"had_conversation_session_slot_number":4,"had_conversation_visitor_slot_number":3,"allow_linker":false,"track_chat_start_page":true}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="3457-836-10-8592";
          });
          olark._.finish();
        }
      })();
    