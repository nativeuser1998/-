var JFormValidator = function () {
  "use strict";
  var t,
    e,
    a,
    r = function (e, a, r) {
      (r = "" === r || r), (t[e] = { enabled: r, exec: a });
    },
    n = function (t, e) {
      var a = e.data("label");
      void 0 === a &&
        ((a = (function (t, e) {
          var a,
            r = jQuery(e);
          return (
            !!t &&
            ((a = r.find("#" + t + "-lbl")).length ||
              !!(a = r.find('label[for="' + t + '"]')).length) &&
            a
          );
        })(e.attr("id"), e.get(0).form)),
        e.data("label", a)),
        !1 === t
          ? (e.addClass("invalid").attr("aria-invalid", "true"),
            a && a.addClass("invalid"))
          : (e.removeClass("invalid").attr("aria-invalid", "false"),
            a && a.removeClass("invalid"));
    },
    i = function (e) {
      var a,
        r = jQuery(e);
      if (r.attr("disabled")) return n(!0, r), !0;
      if (r.attr("required") || r.hasClass("required"))
        if (
          "fieldset" === r.prop("tagName").toLowerCase() &&
          (r.hasClass("radio") || r.hasClass("checkboxes"))
        ) {
          if (!r.find("input:checked").length) return n(!1, r), !1;
        } else if (
          !r.val() ||
          r.hasClass("placeholder") ||
          ("checkbox" === r.attr("type") && !r.is(":checked"))
        )
          return n(!1, r), !1;
      return "" ===
        (a =
          r.attr("class") &&
          r.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)
            ? r.attr("class").match(/validate-([a-zA-Z0-9\_\-]+)/)[1]
            : "")
        ? (n(!0, r), !0)
        : a && "none" !== a && t[a] && r.val() && !0 !== t[a].exec(r.val(), r)
        ? (n(!1, r), !1)
        : (n(!0, r), !0);
    },
    l = function (t) {
      var e,
        r,
        n,
        l,
        u,
        s,
        o = !0,
        d = [];
      for (
        u = 0,
          s = (e = jQuery(t).find("input, textarea, select, fieldset")).length;
        s > u;
        u++
      )
        jQuery(e[u]).hasClass("novalidate") ||
          (!1 === i(e[u]) && ((o = !1), d.push(e[u])));
      if (
        (jQuery.each(a, function (t, e) {
          !0 !== e.exec() && (o = !1);
        }),
        !o && d.length > 0)
      ) {
        for (
          r = Joomla.JText._("JLIB_FORM_FIELD_INVALID"),
            n = { error: [] },
            u = d.length - 1;
          u >= 0;
          u--
        )
          (l = jQuery(d[u]).data("label")) &&
            n.error.push(r + l.text().replace("*", ""));
        Joomla.renderMessages(n);
      }
      return o;
    },
    u = function (t) {
      for (
        var a,
          r = [],
          n = jQuery(t),
          u = 0,
          s = (a = n.find("input, textarea, select, fieldset, button")).length;
        s > u;
        u++
      ) {
        var o = jQuery(a[u]),
          d = o.prop("tagName").toLowerCase();
        ("input" !== d && "button" !== d) ||
        ("submit" !== o.attr("type") && "image" !== o.attr("type"))
          ? "button" === d ||
            ("input" === d && "button" === o.attr("type")) ||
            (o.hasClass("required") &&
              o.attr("aria-required", "true").attr("required", "required"),
            "fieldset" !== d &&
              (o.on("blur", function () {
                return i(this);
              }),
              o.hasClass("validate-email") &&
                e &&
                a[u].setAttribute("type", "email")),
            r.push(o))
          : o.hasClass("validate") &&
            o.on("click", function () {
              return l(t);
            });
      }
      n.data("inputfields", r);
    };
  return (
    (function () {
      (t = {}),
        (a = a || {}),
        (e = (function () {
          var t = document.createElement("input");
          return t.setAttribute("type", "email"), "text" !== t.type;
        })()),
        r("username", function (t, e) {
          return !new RegExp("[<|>|\"|'|%|;|(|)|&]", "i").test(t);
        }),
        r("password", function (t, e) {
          return /^\S[\S ]{2,98}\S$/.test(t);
        }),
        r("numeric", function (t, e) {
          return /^(\d|-)?(\d|,)*\.?\d*$/.test(t);
        }),
        r("email", function (t, e) {
          t = punycode.toASCII(t);
          return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            t
          );
        });
      for (
        var n = jQuery("form.form-validate"), i = 0, l = n.length;
        l > i;
        i++
      )
        u(n[i]);
    })(),
    { isValid: l, validate: i, setHandler: r, attachToForm: u, custom: a }
  );
};
(document.formvalidator = null),
  jQuery(function () {
    document.formvalidator = new JFormValidator();
  });
