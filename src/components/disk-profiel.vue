<template>
    <div class="disc-profile container">
        <h2>Beantwoord de volgende vragen Voor jouw disc profiel:</h2>
        <div class="row">
            <div class="col-12 col-md-6">
                <div v-for="(question, index) in questions" :key="index" class="question">
                    <p>{{ question.text }}</p>
                    <div>
                        <label>
                            <input type="radio" :name="'q' + index" value="1" v-model="answers[index]" /> {{
                                question.options[0]
                            }}
                        </label>
                        <label>
                            <input type="radio" :name="'q' + index" value="2" v-model="answers[index]" /> {{
                                question.options[1]
                            }}
                        </label>
                        <label>
                            <input type="radio" :name="'q' + index" value="3" v-model="answers[index]" /> {{
                                question.options[2]
                            }}
                        </label>
                        <label>
                            <input type="radio" :name="'q' + index" value="4" v-model="answers[index]" /> {{
                                question.options[3]
                            }}
                        </label>
                    </div>
                </div>
                <button @click="calculateProfile">Bereken Profiel</button>
            </div>

            <!-- Display the profile -->
            <div v-if="profile" class="profile-container col-12 col-md-6">
                <div class="circle-container">
                    <canvas ref="canvas" width="300" height="300"></canvas>
                </div>
                <div class="profile-text">
                    <h3>Je DISC Profiel:</h3>
                    <p><strong>Dominant:</strong> {{ profile.d }}%</p>
                    <p><strong>Invloedrijk:</strong> {{ profile.i }}%</p>
                    <p><strong>Stabiel:</strong> {{ profile.s }}%</p>
                    <p><strong>Conscientieus:</strong> {{ profile.c }}%</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    text: 'Hoe ga je om met uitdagingen?',
                    options: ['Ik neem direct actie en neem risico\'s', 'Ik zoek naar samenwerkingsmogelijkheden', 'Ik werk rustig door zonder veel risico\'s', 'Ik zoek altijd naar de juiste procedure en details']
                },
                {
                    text: 'Hoe werk je samen met anderen?',
                    options: ['Ik leid de groep en neem de beslissingen', 'Ik ben energiek en streef naar groepsdynamiek', 'Ik ben ondersteunend en zorg voor harmonie', 'Ik focus op structuur en zorg voor de details']
                },
                {
                    text: 'Hoe reageer je op veranderingen?',
                    options: ['Ik pas me snel aan en ga uitdagingen aan', 'Ik probeer anderen mee te krijgen met mijn enthousiasme', 'Ik ben rustig en zoek naar stabiliteit', 'Ik analyseer de situatie en pas nauwkeurig aan']
                },
                {
                    text: 'Hoe benader je details en procedures?',
                    options: ['Ik wil snel resultaat, ook als het onduidelijk is', 'Ik focus op de mensen, details zijn niet altijd belangrijk', 'Ik ben geduldig en volg een betrouwbare manier', 'Ik focus op de details en volg altijd de juiste procedure']
                }
            ],
            answers: [null, null, null, null],
            profile: null,
        };
    },
    methods: {
        calculateProfile() {
            if (this.answers.includes(null)) {
                alert('Beantwoord alle vragen.');
                return;
            }

            let scores = { d: 0, i: 0, s: 0, c: 0 };

            // A, B, C, D scores to DISC types (example mapping)
            this.answers.forEach((answer) => {
                if (answer === '1') scores.d += 1; // Dominant
                if (answer === '2') scores.i += 1; // Invloedrijk
                if (answer === '3') scores.s += 1; // Stabiel
                if (answer === '4') scores.c += 1; // Conscientieus
            });

            // Normalize scores to percentages
            let total = scores.d + scores.i + scores.s + scores.c;
            this.profile = {
                d: ((scores.d / total) * 100).toFixed(1),
                i: ((scores.i / total) * 100).toFixed(1),
                s: ((scores.s / total) * 100).toFixed(1),
                c: ((scores.c / total) * 100).toFixed(1),
            };

            // Wait for the DOM update, then draw the chart
            this.$nextTick(() => {
                this.drawChart();
            });
        },

        drawChart() {
            const ctx = this.$refs.canvas.getContext('2d');
            const data = [this.profile.d, this.profile.i, this.profile.s, this.profile.c];
            //const labels = ['Dominant', 'Invloedrijk', 'Stabiel', 'Conscientieus'];
            const colors = ['#FF5733', '#FFC300', '#28A745', '#17A2B8'];
            const total = data.reduce((sum, value) => sum + parseFloat(value), 0);

            ctx.clearRect(0, 0, 300, 300); // Clear previous chart
            let startAngle = -0.5 * Math.PI;

            data.forEach((value, index) => {
                const percentage = (value / total) * 100;
                const endAngle = startAngle + (percentage / 100) * 2 * Math.PI;
                ctx.beginPath();
                ctx.arc(150, 150, 120, startAngle, endAngle);
                ctx.lineTo(150, 150);
                ctx.fillStyle = colors[index];
                ctx.fill();
                startAngle = endAngle;
            });
        },
    }
};
</script>

<style scoped>
.question {
    margin-bottom: 20px;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.question div {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
}

.profile-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
}

.circle-container {
    width: 300px;
    height: 300px;
    margin-right: 20px;
}

.profile-text {
    font-size: 18px;
}

.profile-text p {
    margin: 5px 0;
}

.container {}
</style>
