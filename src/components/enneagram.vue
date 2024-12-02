<template>
  <div class="enneagram">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Circle Outline -->
      <circle cx="100" cy="100" r="95" stroke="black" fill="none" />

      <!-- Lines Connecting Points -->
      <line v-for="(line, index) in lines" :key="index" :x1="points[line[0]].x" :y1="points[line[0]].y"
        :x2="points[line[1]].x" :y2="points[line[1]].y" stroke="black" />

      <!-- Points -->
      <circle v-for="(point, index) in points" :key="index" :cx="point.x" :cy="point.y" r="5" fill="blue"
        @mouseover="showType(index + 1)" @mouseleave="hideType" @click="selectType(index + 1)" />

      <!-- Labels -->
      <text v-for="(point, index) in points" :key="'label-' + index" :x="point.labelX" :y="point.labelY"
        text-anchor="middle" font-size="10" fill="black">
        {{ index + 1 }}
      </text>
    </svg>

    <!-- Hovered or Selected Type Details -->
    <div class="info-box" v-if="hoveredType || selectedType">
      <p v-if="hoveredType">Hovered Type: {{ hoveredType }}</p>
      <p v-if="selectedType">Selected Type: {{ selectedType }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredType: null,
      selectedType: null,
      // Coordinates for the nine points (calculated in a circular arrangement)
      points: Array.from({ length: 9 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2;
        return {
          x: 100 + 90 * Math.cos(angle),
          y: 100 + 90 * Math.sin(angle),
          labelX: 100 + 105 * Math.cos(angle),
          labelY: 100 + 105 * Math.sin(angle),
        };
      }),
      // Lines connecting specific points in the Enneagram
      lines: [
        [0, 3],
        [3, 6],
        [6, 0], // Triangle
        [1, 4],
        [4, 7],
        [7, 1], // Inner Triangle
        [2, 5],
        [5, 8],
        [8, 2], // Inner Triangle
      ],
    };
  },
  methods: {
    showType(type) {
      this.hoveredType = type;
    },
    hideType() {
      this.hoveredType = null;
    },
    selectType(type) {
      this.selectedType = type;
    },
  },
};
</script>

<style scoped>
.enneagram {
  display: flex;
  flex-direction: column;
  align-items: center;
}

svg {
  width: 300px;
  height: 300px;
}

.info-box {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #f9f9f9;
}
</style>