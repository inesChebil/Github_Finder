class Github {
    constructor(){
        this.client_id='0bf26f12d5cb534a9f33';
        this.client_secret='d77f4e7f94ca9cbf03889e4f8f64251c2b08566a';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileresponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse =await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileresponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos

        }
    }

}