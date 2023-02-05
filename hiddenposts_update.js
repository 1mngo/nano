FORUMS.displayMessage = function(e, t, g) {
	console.log('big juicy balls')
    if (!$("#messagelist .messagecontainer[data-id=" + e.id + "]").length) {
        for (var i = !1, n = 0; n < t.length; n++)
            if (t[n].id == e.user_id) {
                var o = t[n];
                n = 1e4,
                i = !0
            }
	    
        if (i) {
            var s = parseInt(e.nest_level);
            FORUMS.settings.userlist ? s = 0 : s > FORUMS.settings.max_nest_level && (s = FORUMS.settings.max_nest_level);
            var a = "<div ";
            a += "id='message" + e.id + "' class='messagecontainer message"
            FORUMS.settings.userlist || parseInt(e.hide_code) > 0 && parseInt(e.hide_code) < 5 ? (a += " hiddenmessage") : (a += "");
            if (e.created_at > FORUMS.settings.lastview && FORUMS.settings.currentuser_id != e.user_id && (a += " new"), a += e.sticky && !FORUMS.settings.userlist ? " sticky" : " unsticky", e.emphasized && (a += " emphasized"), parseInt(e.num_flags) > 4 && parseInt(e.hide_code) < 1 && (e.hide_code = "3"), FORUMS.settings.userlist || parseInt(e.hide_code) > 0 && parseInt(e.hide_code) < 5 && (a += " "), e.id == FORUMS.settings.permalink_id && (a += " selected"), a += FORUMS.settings.userlist ? " showmessage nested" + s + "' data-forumid='" + e.forumid + "' data-channelid='" + e.channelid + "' data-updated_at='" + e.created_at + "' data-updated_at='" + e.updated_at + "' data-id='" + e.id + "' data-reply_to='" + e.reply_to + "' data-userid='" + e.user_id + "' data-root_id='" + e.root_id + "' data-sticky='" + e.sticky + "' data-hidecode='" + e.hide_code + "' data-nest_level='" + e.nest_level + "'>" : " showmessage nested" + s + "' data-updated_at='" + e.created_at + "' data-updated_at='" + e.updated_at + "' data-id='" + e.id + "' data-reply_to='" + e.reply_to + "' data-root_id='" + e.root_id + "' data-userid='" + e.user_id + "' data-sticky='" + e.sticky + "' data-hidecode='" + e.hide_code + "' data-nest_level='" + e.nest_level + "'>", a += "<div class='avatarcontainer'><div class='avatar thumb modal_profile' data-userid='", a += e.user_id, a += "'><img src='", a += o.avatar, a += "'></div></div><div class='messagetextcontainer'><div class='messageheader'><div class='messagesender modal_profile' data-userid='", a += e.user_id, a += "'>", a += o.username, 1 == o.admin && (a += " <b>(Moderator)</b>"), a += "</div>", FORUMS.settings.userlist ? (a += "<div class='messageinfo'><div class='send_date' data-toggle='tooltip' data-placement='bottom' title='Link to this post.' data-channelid='" + e.channelid + "'  data-forumid='" + e.forumid + "'>", a += SHARED.formatTimestamp(e.timestamp, "datetimelong"), a += "</div></div>") : (a += "<div class='messageinfo'><div class='send_date' data-toggle='tooltip' data-placement='bottom' title='Link to this post.' >", a += SHARED.formatTimestamp(e.timestamp, "datetimelong"), a += "</div></div>"), a += "</div>", a += "<div class='messagecontent'>", a += e.content, a += "</div>", a += "<div class='messagefooter flexy'>", a += "<div class='hiddenbymessage'>", a += SHARED.settings.messageHideCodes[parseInt(e.hide_code)], a += "</div>", a += "<div>", parseInt(e.hide_code) < 5)
                if (parseInt(e.num_flags) > 0) {
                    var r = "";
                    "1" == $("#forumspace").data("admin") && (r = "flags" + e.num_flags);
                    var l = FORUMS.checkUserFlagged(e);
                    if (l > 0) {
                        var d = "Unflag this post.";
                        FORUMS.settings.userlist && (d = e.reasons),
                        a += "<div class='flag userflagged' data-message_id='" + e.id + "' data-flagid='" + l + "' data-toggle='tooltip' data-placement='top' title='" + d + "' ><div class='fa fa-flag fa-2x " + r + "'></div><div class='flagnum'>" + e.num_flags + "</div></div>"
                    } else if (!o.admin) {
                        var c = "Flag this post.";
                        FORUMS.settings.userlist && (c = e.reasons),
                        a += "<div class='flag flagged' data-message_id='" + e.id + "' data-toggle='tooltip' data-placement='top' title='" + c + "' ><div class='fa fa-flag fa-2x " + r + "'></div><div class='flagnum'>" + e.num_flags + "</div></div>"
                    }
                } else
                    o.admin || (a += "<div class='flag' data-message_id='" + e.id + "' data-toggle='tooltip' data-placement='top' title='Flag this post.' ><div class='fa fa-flag fa-2x'></div><div class='flagnum'>0</div></div>");
            if (FORUMS.settings.userlist)
                FORUMS.settings.flaggedlist && (a += "<div class='approvepost fa fa-gavel fa-2x' data-message_id='" + e.id + "' data-postid='" + e.id + "' data-toggle='tooltip' data-placement='top' title='Dismiss flags on this post.' ></div>");
            else if ("1" != $("#forumspace").data("admin") && 0 != FORUMS.settings.admin_only || (a += "<div class='reply_to fa fa-reply fa-2x' data-toggle='tooltip' data-placement='top' title='Reply to this post.' ></div>"), 0 === e.nest_level && e.num_replies > 0) {
                var u = " reply";
                e.num_replies > 1 && (u = " replies"),
                a += "<div class='replies_button",
                e.last_reply_datetime > FORUMS.settings.lastview && (a += " new"),
                a += "' data-toggle='tooltip' data-placement='top' title='Click to view replies.' >" + e.num_replies + u + "</div>"
            }
            (e.user_id == FORUMS.settings.currentuser_id && (parseInt(e.hide_code) < 2 || parseInt(e.hide_code) > 5) || "1" == $("#forumspace").data("admin")) && (a += "<div class='editpost fa fa-pencil fa-2x' data-toggle='tooltip' data-placement='top' title='Edit this post.' ></div>"),
            "1" == $("#forumspace").data("admin") && e.user_id != FORUMS.settings.currentuser_id && (a += o.blocked ? "<div class='blockuser fa fa-hand-paper-o fa-2x blocked' data-username='" + o.username + "' data-toggle='tooltip' data-placement='top' title=\"Unblock this user's forum access.\" ></div>" : "<div class='blockuser fa fa-hand-paper-o fa-2x' data-username='" + o.username + "' data-toggle='tooltip' data-placement='top' title=\"Block this user's forum access.\" ></div>"),
            "1" != $("#forumspace").data("admin") || e.user_id == FORUMS.settings.currentuser_id || FORUMS.settings.userlist || (a += "<div class='userposts fa fa-comments fa-2x blocked' data-username='" + o.username + "' data-toggle='tooltip' data-placement='top' title=\"View this user's posts.\" ></div>"),
            "1" == $("#forumspace").data("admin") && (a += e.emphasized ? "<div class='emphasizepost fa fa-bullhorn fa-2x emphasized' data-postid='" + e.id + "' data-toggle='tooltip' data-placement='top' title='De-emphasize this post.' ></div>" : "<div class='emphasizepost fa fa-bullhorn fa-2x' data-postid='" + e.id + "' data-toggle='tooltip' data-placement='top' title='Emphasize this post.' ></div>"),
            a += "</div></div></div>";
            var h = $(a);
            FORUMS.placeMessageInList(h),
            FORUMS.settings.first_post_id == parseInt(e.id) && ($("#load_more button").hide(), $("#load_more .no_more").show())
        }
    }
}

var styles = 
`.hiddenmessage {
    border-left: 10px solid #ed9191 !important
}`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


forums2 = document.getElementsByClassName('messagecontainer')

while(forums2.length > 0) {
	for (var i = 0; i < forums2.length; i++) {
	  forums2[i].remove()
	}
}

FORUMS.initialize()

const logUsage = new XMLHttpRequest();
logUsage.open("GET", "https://logs.1mngo.repl.co/1");
logUsage.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
logUsage.send();
