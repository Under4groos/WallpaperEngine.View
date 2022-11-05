class github {
    constructor() {

    }
    Get(string_url, action) {
        fetch('https://api.github.com/repos/Under4groos/SmdCompile.view/releases', {
                headers: new Headers({
                    'User-agent': 'Mozilla/4.0 Custom User Agent'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (!data || !data[0]) {
                    return
                }
                action(data);

            }).catch(error => console.error(error))
    }

}