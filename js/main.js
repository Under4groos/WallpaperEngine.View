$(document).ready(function() {
    main()
});

function SetElement_onclick(str_name, str_url) {
    var element_ = document.getElementById(str_name);

    element_.onclick = function() {

        window.open(str_url, '_blank');
    }
    return element_
}



function main() {

    let git_ = new github()

    git_.Get("https://api.github.com/repos/Under4groos/SmdCompile.view/releases", (data) => {
        SetElement_onclick("but_view_demo", data[0]["assets"][0]["browser_download_url"])
    });

    document.getElementById('image')
        .style.display = "block";



}