<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="Modules & Grades"
      :data="data"
      :columns="columns"
      row-key="name"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      dark
      bordered
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { label: 'Year', name: 'year', field: row => row.year, sortable: true, align: 'left' },
        { label: 'Module', name: 'module', field: row => row.module, sortable: true, align: 'left' },
        { label: 'Mark (%)', name: 'mark', field: row => row.mark, sortable: true, align: 'left' },
        { label: 'Grade', name: 'grade', field: row => row.grade, sortable: true, align: 'left' },
        { label: 'Result', name: 'result', field: row => row.result, sortable: true, align: 'left' }
      ],
      data: [
        {
          year: '1',
          module: 'Programming',
          mark: 86,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Object-Oriented Programming',
          mark: 71,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Computers and the Internet',
          mark: 69,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Data Structures and Algorithms',
          mark: 89,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Discrete Mathematics for Computer Science',
          mark: 70,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Computational Mathematics',
          mark: 60,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Web Development',
          mark: 61,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '1',
          module: 'Social and Professional Issues of the Information Age',
          mark: 55,
          grade: '2:2',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Software Development',
          mark: 72,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Computer Languages and Representations',
          mark: 63,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Database Theory and Design ',
          mark: 77,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Artificial Intelligence and Applications',
          mark: 63,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Network and Computer Security',
          mark: 73,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Outside the box: Computer Science Research and Applications',
          mark: 64,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'The C Family',
          mark: 80,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '2',
          module: 'Group Software Engineering Project',
          mark: 74,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Individual Literature Review and Project ',
          mark: 83,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Enterprise Computing',
          mark: 61,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Nature-Inspired Computation ',
          mark: 69,
          grade: '2:1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Learning from Data',
          mark: 77,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Computer Graphics',
          mark: 88,
          grade: '1',
          result: 'Passed'
        },
        {
          year: '3',
          module: 'Algorithms that Changed the World',
          mark: 69,
          grade: '2:1',
          result: 'Passed'
        }
      ]
    }
  }
}
</script>
