(function() {var implementors = {};
implementors["actix_web"] = [{text:"impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>",synthetic:false,types:["actix_web::types::payload::Payload"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"actix_web/trait.HttpMessage.html#associatedtype.Stream\" title=\"type actix_web::HttpMessage::Stream\">Stream</a>: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item = <a class=\"struct\" href=\"actix_web/web/struct.Bytes.html\" title=\"struct actix_web::web::Bytes\">Bytes</a>, Error = <a class=\"enum\" href=\"actix_web/client/enum.PayloadError.html\" title=\"enum actix_web::client::PayloadError\">PayloadError</a>&gt;,&nbsp;</span>",synthetic:false,types:["actix_web::types::readlines::Readlines"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
