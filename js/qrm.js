// qrmeisi.js
//
// 最新版
// https://github.com/cooTake5/qrmeisi/blob/main/products/subdomain-qrmeisi/qrmeisi-template/qrmeisi.js



// clipboardWriteText(text)
//
// 引数で渡した文字列をクリップボードに書き込む関数
//
function clipboardWriteText(text) {
    navigator.clipboard.writeText(text).then(e => {alert('コピーできました');});
}



// fbProfileLink(userID, userName)
// 
// Facebookの個人プロファイルに飛ばす関数
// UAを見て処理を分岐させている
// 
// 組み込み方
// <a href="javascript:void(0);" onclick="fbProfileLink('引数１','引数２')">【Facebookアイコン画像】</a>
//
// 引数
// 1個目 Facebookの内部的なユーザーID（HTMLソースから探し出す）
// 2個目 Facebookのユーザー名
// 
// ユーザーIDの手がかり
// "userVanity" の隣にある "userID"
// "variables" の中にある "userID"
// "container_id" の中にある "userID"
// ※間違えて自分のユーザーIDを使わないように。間違っていればテストで自分が表示される。
// 
// 技術的特徴
// URLスキームを使う
// 
// 参考文献
// https://16deza.com/open-facebookpage-in-app-directly/
// https://www.smappon.jp/58395.html
//
function fbProfileLink(userID, userName) {
    const deviceUA = window.navigator.userAgent.toLowerCase();
    const is_iPhone = deviceUA.indexOf('iphone') != -1 && deviceUA.indexOf('ipod') == -1; // iPhone (ここでは iPod touch を除外)
    const is_iPad = deviceUA.indexOf('ipad') != -1 || deviceUA.indexOf('macintosh') > -1 && 'ontouchend' in document; // iPad (旧 iOS, 新 iPad OS とも
    const is_Android = deviceUA.indexOf('android') != -1; // Android
    if(is_iPhone || is_iPad) { // iPhone, iPad
        url = "fb://profile?id=" + userID;
    }
    else if(is_Android) { // Android
        url = "fb://profile/" + userID;
    }
    else { // PC, iPod touch
        url = "https://www.facebook.com/" + userName + "/";
    }
    if(is_iPhone || is_iPad || is_Android) { // iPhone, iPad, Android なら
        location.href = url; // アプリで起動する
    } else { // PC, iPod touch なら
        open( url, "_blank" ) ; // ブラウザ別タブで開く
    }
}



// fbPageLink(pageID, userName)
// 
// Facebookページに飛ばす関数
// UAを見て処理を分岐させている
// 
// 組み込み方
// <a href="javascript:void(0);" onclick="fbPageLink('引数１','引数２')">【Facebookアイコン画像】</a>
//
// 引数
// 1個目 FacebookページのID（HTMLソースから探し出す）
// 2個目 FacebookページのURL
//
// ユーザーIDの手がかり
// ページのソースから meta property="al:android:url" を見つける。
// contentの中にある15桁の数字。
// <meta property="al:android:url" content="fb://page/804574702985754?referrer=app_link"/>
//
function fbPageLink(pageID, pageURL) {
    const deviceUA = window.navigator.userAgent.toLowerCase();
    const is_iPhone = deviceUA.indexOf('iphone') != -1 && deviceUA.indexOf('ipod') == -1; // iPhone (ここでは iPod touch を除外)
    const is_iPad = deviceUA.indexOf('ipad') != -1 || deviceUA.indexOf('macintosh') > -1 && 'ontouchend' in document; // iPad (旧 iOS, 新 iPad OS とも
    const is_Android = deviceUA.indexOf('android') != -1; // Android
    if(is_iPhone || is_iPad) { // iPhone, iPad
        url = "fb://page/?id=" + pageID;
    }
    else if(is_Android) { // Android
        url = "fb://page/" + pageID;
    }
    else { // PC, iPod touch
        // url = pageURL;
        url = 'https://www.facebook.com/' + pageID + '/';
    }
    if(is_iPhone || is_iPad || is_Android) { // iPhone, iPad, Android なら
        location.href = url; // アプリで起動する
    } else { // PC, iPod touch なら
        open( url, "_blank" ) ; // ブラウザ別タブで開く
    }
}



// instagramUserLink(userName)
// 
// Instagramの個人プロファイルに飛ばす関数
// UAを見て処理を分岐させている
// 
// 組み込み方
// <a href="javascript:void(0);" onclick="instagramUserLink('引数１')">【アイコン画像】</a>
//
// 引数
// 1個目 Facebookのユーザー名
// 
// 技術的特徴
// UserAgentで分岐する
// URLスキームを使う
// 
// 参考文献
// https://16deza.com/open-facebookpage-in-app-directly/
// https://www.smappon.jp/58395.html
// https://syncer.jp/instagram-api-matome
//
function instagramUserLink(userName) {
    const deviceUA = window.navigator.userAgent.toLowerCase();
    const is_iPhone = deviceUA.indexOf('iphone') != -1 && deviceUA.indexOf('ipod') == -1; // iPhone (ここでは iPod touch を除外)
    const is_iPad = deviceUA.indexOf('ipad') != -1 || deviceUA.indexOf('macintosh') > -1 && 'ontouchend' in document; // iPad (旧 iOS, 新 iPad OS とも
    const is_Android = deviceUA.indexOf('android') != -1; // Android
    if(is_iPhone || is_iPad) { // iPhone, iPad
        url = "instagram://user?username=" + userName;
    }
    else if(is_Android) { // Android
        url = "instagram://user?username=" + userName;
    }
    else { // PC, iPod touch
        url = "https://www.instagram.com/" + userName + "/";
    }
    if(is_iPhone || is_iPad || is_Android) { // iPhone, iPad, Android なら
        location.href = url; // アプリで起動する
    } else { // PC, iPod touch なら
        open( url, "_blank" ) ; // ブラウザ別タブで開く
    }
}
