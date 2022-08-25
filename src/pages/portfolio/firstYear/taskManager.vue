<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3">Task Manager</div>
  <div class="text-h5">Module: Web Development</div>
  <div class="text-h5 q-mt-sm">Grade: 73%</div>
  <q-icon name="fab fa-php" size="80px" />
  <q-separator dark class="q-mt-sm" />

  <div class="row justify-center">
    <div class="col q-pa-md text-body1" style="max-width: 1000px">
      {{text.First_Year.Task_Manager.Main}}
    </div>
  </div>

  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Log In</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.Log_In}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="login.php" href="https://github.com/will09122000/Task-Manager/blob/master/login.php" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Sign Up</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.Sign_Up}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="register.php" href="https://github.com/will09122000/Task-Manager/blob/master/register.php" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">New Task</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.New_Task}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="new_task.php" href="https://github.com/will09122000/Task-Manager/blob/master/new_task.php" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Import and Export Tasks</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.Import_Export_Tasks}}
      </q-card-section>
      <div class="q-py-md q-gutter-md justify-center">
        <q-btn class="redirect" type="a" label="import_tasks.php" href="https://github.com/will09122000/Task-Manager/blob/master/import_tasks.php" icon="open_in_new" color="primary" target="_blank" />
        <q-btn class="redirect" type="a" label="export_tasks.php" href="https://github.com/will09122000/Task-Manager/blob/master/export_tasks.php" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Feedback</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.FB}}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="my-card">
      <q-card-section>
        <div class="text-h6">What did I learn?</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Task_Manager.WDIL}}
      </q-card-section>
    </q-card>

  </div>

  <customImage filename="task_manager_0.png" imageDescription="Task Manager" />
  <q-separator class="q-mt-md" />
  <customImage filename="task_manager_1.png" imageDescription="Task Manager" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Task Manager
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-php" size="30px" class="q-ml-sm" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Task-Manager" icon="open_in_new" color="primary" target="_blank" />
    </q-toolbar>
  </q-footer>
</div>
</template>

<script>
import textJson from '../../../text.json'
import customImage from '../../../components/image.vue'

export default {
  components: {
    customImage
  },
  data () {
    return {
      text: textJson
    }
  }
}
</script>
