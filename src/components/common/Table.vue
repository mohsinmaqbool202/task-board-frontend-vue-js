<template>
  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
          <th v-if="$slots.actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
          <td v-if="$slots.actions" class="actions-cell">
            <slot name="actions" :row="row" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: Array,
  data: Array
})
</script>

<style scoped>
.table-responsive {
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  min-width: 600px;
}

th, td {
  padding: 12px 16px;
  text-align: left;
}

th {
  background: #f5f7fa;
  color: #333;
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb;
}

tr {
  transition: background 0.2s;
}

tbody tr:hover {
  background: #f0f4f8;
}

td {
  border-bottom: 1px solid #e5e7eb;
}

tr:last-child td {
  border-bottom: none;
}

.actions-cell {
  display: flex;
  gap: 2px
}

@media (max-width: 700px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  thead {
    display: none;
  }
  tr {
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    background: #fff;
  }
  td {
    border: none;
    position: relative;
    padding-left: 50%;
    min-height: 40px;
  }
  td:before {
    position: absolute;
    left: 16px;
    top: 12px;
    width: 45%;
    white-space: nowrap;
    font-weight: bold;
    color: #888;
    content: attr(data-label);
  }
}
</style>