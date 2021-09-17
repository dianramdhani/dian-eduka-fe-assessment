import { createServer, Model } from 'miragejs';

export default function makeServer({ environment = "development" } = {}) {
    let server = new createServer({
        environment,

        models: {
            question: Model,
            keyAnswer: Model,
        },
        seeds(server) {
            server.create("question", {
                type: 'Matematika',
                text: '2 x 20',
                question: 'Berapa hasil dari perkalian di atas?',
                options: [
                    {
                        option: 'A',
                        text: '10'
                    },
                    {
                        option: 'B',
                        text: '20'
                    },
                    {
                        option: 'C',
                        text: '30'
                    },
                    {
                        option: 'D',
                        text: '40'
                    },
                    {
                        option: 'E',
                        text: '50'
                    },
                ]
            });
            server.create("question", {
                type: 'Matematika',
                text: '100 x 2',
                question: 'Berapa hasil dari perkalian di atas?',
                options: [
                    {
                        option: 'A',
                        text: '100'
                    },
                    {
                        option: 'B',
                        text: '200'
                    },
                    {
                        option: 'C',
                        text: '300'
                    },
                    {
                        option: 'D',
                        text: '400'
                    },
                    {
                        option: 'E',
                        text: '500'
                    },
                ]
            });
            server.create("question", {
                type: 'IPA',
                text: 'Sebutir peluru bermassa 10 gram bergerak dengan kecepatan 100 m/s.',
                question: 'Berapa energi kinetik peluru tersebut?',
                options: [
                    {
                        option: 'A',
                        text: '50 J'
                    },
                    {
                        option: 'B',
                        text: '1.000 J'
                    },
                    {
                        option: 'C',
                        text: '10.000 J'
                    },
                    {
                        option: 'D',
                        text: '50.000 J'
                    },
                    {
                        option: 'E',
                        text: '1 J'
                    },
                ]
            });
            server.create("question", {
                type: 'IPA',
                text: 'Bunyi tidak dapat didengar jika antara sumber bunyi dengan pendengar terdapat ruang hampa.',
                question: 'Kenapa demikian?',
                options: [
                    {
                        option: 'A',
                        text: 'merambat membutuhkan ruang'
                    },
                    {
                        option: 'B',
                        text: 'merupakan gelombang transversal'
                    },
                    {
                        option: 'C',
                        text: 'merupakan gelombang elektromagnetik'
                    },
                    {
                        option: 'D',
                        text: 'merambat memerlukan medium'
                    },
                    {
                        option: 'E',
                        text: 'tidak ada jawaban yang benar'
                    },
                ]
            });
            server.create("question", {
                type: 'IPA',
                text: 'Label pada sebuah lampu pijar bertuliskan 40W/ 220V.',
                question: 'Apabila lampu pijar tersebut menyala selama 8 jam, maka besarnya energi yang digunakan lampu adalah...',
                options: [
                    {
                        option: 'A',
                        text: '192 kj'
                    },
                    {
                        option: 'B',
                        text: '652 kj'
                    },
                    {
                        option: 'C',
                        text: '1.240 kj'
                    },
                    {
                        option: 'D',
                        text: '7 kj'
                    },
                    {
                        option: 'E',
                        text: '1.152 kj'
                    },
                ]
            });
            server.create('keyAnswer', { key: 'D' });
            server.create('keyAnswer', { key: 'B' });
            server.create('keyAnswer', { key: 'A' });
            server.create('keyAnswer', { key: 'D' });
            server.create('keyAnswer', { key: 'E' });
        },
        routes() {
            this.namespace = "api";

            this.get("/questions", (schema) => {
                return schema.questions.all()
            });

            this.get("/key-answers", (schema) => {
                return schema.keyAnswers.all()
            });
        },
    });

    return server;
}