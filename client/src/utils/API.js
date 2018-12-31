import axios from "axios";
export default {
    // Gets all books
    getArticles: function(data) {
        const APIkey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?q=' + data.topic + "&begin_date=" + data.start + "0101&end_date=" + data.end + "0101&api-key=" + APIkey;
        return axios.get(url);
    },
    getSaved: function() {
        return axios.get("/api/articles");
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    },
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    }
};
