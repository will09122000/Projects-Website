<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-tabs
          v-model="root"
          no-caps
          mobile-arrows
          outside-arrows
          class="bg-secondary text-white"
        >
          <q-tab name="Personal" label="Personal" />
          <q-tab name="GCSE" label="GCSE" />
          <q-tab name="A-Level" label="A-Level" />
          <q-tab name="1st Year" label="1st Year" />
          <q-tab name="2nd Year" label="2nd Year" />
          <q-tab name="3rd Year" label="3rd Year" />
          <q-tab name="4th Year" label="4th Year" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="root" animated class="bg-grey-9 text-white">
          <q-tab-panel name="Personal">
            <q-tabs
              v-model="personal"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Discord Bot" label="Discord Bot" />
              <q-tab name="This Website" label="This Website" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Discord Bot" class="bg-grey-8">
                <div class="text-h6">Discord Bot</div>
              </q-tab-panel>
              <q-tab-panel name="This Website" class="bg-grey-8">
                <div class="text-h6">This Website</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="GCSE">
            <q-tabs
              v-model="gcse"
              no-caps
              mobile-arrows
              outside-arrows
            >
            <q-tab name="A452" label="A452" />
            <q-tab name="A453" label="A453" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="gcse" animated class="bg-purple-1 text-center">
              <q-tab-panel name="A452" class="bg-grey-8">
                <div class="text-h6">A452 Coursework | SQL</div>
                <iframe width=100% :height=window.height allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="https://drive.google.com/file/d/1_GeuFxHE6XqkyYT8qQeWCOJUkHqwx_LH/preview?"></iframe>
              </q-tab-panel>
              <q-tab-panel name="A453" class="bg-grey-8">
                <div class="text-h6">A453 Coursework | Python</div>
                <iframe width=100% :height=window.height allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" src="https://drive.google.com/file/d/1GZrq59o7UloVOx84_u3ERT1n8Av1V003/preview?"></iframe>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>

          <q-tab-panel name="1st Year">
            <q-tabs
              v-model="first_year"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Countdown Simulator" label="Countdown Simulator" />
              <q-tab name="Smart Alarm Clock" label="Smart Alarm Clock" />
              <q-tab name="Barnaby's Brewhouse" label="Barnaby's Brewhouse" />
              <q-tab name="Beanbag Store" label="Beanbag Store" />
              <q-tab name="Task Manager" label="Task Manager" />
              <q-tab name="Lift Algorithm" label="Lift Algorithm" />
            </q-tabs>

            <q-separator />
            <q-tab-panels v-model="first_year" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Countdown Simulator" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Countdown Simulator</div>
                <q-icon name="fab fa-python" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6 text-bold">Countdown Simulator</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Countdown_Simulator.a}} <br>
                      {{text.First_Year.Countdown_Simulator.b}} <br>
                      {{text.First_Year.Countdown_Simulator.c}} <br>
                      {{text.First_Year.Countdown_Simulator.d}} <br>
                      {{text.First_Year.Countdown_Simulator.e}} <br>
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="countdown_simulator.py" v-on:click="redirect('https://github.com/will09122000/Countdown-Simulator/blob/master/Countdown%20Simulator/countdown_simulator.py')"/></div>
                  </q-card>
                </div>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Countdown Simulator
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/countdown_simulator_0.png"
                        spinner-color="white"
                        :width="windowWidth"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/countdown_simulator_0.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Countdown Simulator
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Countdown-Simulator')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Smart Alarm Clock" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Smart Alarm Clock</div>
                <q-icon name="fab fa-python" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Smart Alarm Clock</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Main}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Smart_Alarm_Clock.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/Smart_Alarm_Clock.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Notifications</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Notifications}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="notifications.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/notifications.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Alarms</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Alarms}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="alarm.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/alarm.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Weather</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Weather}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="weather.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/weather.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">News</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.News}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="news.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/news.py')"/></div>
                  </q-card>
                </div>
                <q-dialog
                    v-model="dialog"
                    persistent
                    :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Smart Alarm Clock
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/smart_alarm_clock_0.png"
                        spinner-color="white"
                        :width="windowWidth"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/smart_alarm_clock_0.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Smart Alarm Clock
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock')"/>
                  </q-toolbar>
                </q-footer>
                <!--
                <prism language="python" class="code">
                  {{ smart_alarm_clock_code.data }}
                </prism>
                -->
              </q-tab-panel>

              <q-tab-panel name="Barnaby's Brewhouse" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Barnaby's Brewhouse</div>
                <q-icon name="fab fa-python" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Barnaby's Brewhouse</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Main}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="barnabys_brewhouse.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/barnabys_brewhouse.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Batch Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Batch_Management}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="batch_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/batch_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Tank Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Tank_Management}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="tank_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/tank_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Inventory</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Inventory}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="inventory.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/inventory.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Order Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Order_Management}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="order_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/order_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Beer Suggestion</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Beer_Suggestion}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="beer_suggestion.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/beer_suggestion.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Sales Preditions</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Sales_Preditions}}
                  </q-card-section>
                  <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="sales_predictions.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/sales_predictions.py')"/></div>
                </q-card>
                </div>
                <q-dialog
                    v-model="dialog"
                    persistent
                    :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Barnaby's Brewhouse
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/barnabys_brewhouse_0.png"
                        spinner-color="white"
                        :width="windowWidth"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/barnabys_brewhouse_0.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Barnaby's Brewhouse
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Beanbag Store" class="bg-grey-8 justify-center items-center">
                <div class="text-h3 q-mb-sm">Beanbag Store</div>
                <q-icon name="fab fa-java" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Object-Oritentated Programming</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9 row justify-center">
                    <q-card-section>
                      <div class="text-h6">Beanbag Store</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Beanbag_Store.Main}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Source" v-on:click="redirect('https://github.com/will09122000/Beanbag-Store/tree/master/src/beanbags')"/></div>
                  </q-card>
                </div>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Beanbag Store
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-java" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Beanbag-Store')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Task Manager" class="bg-grey-8">
                <div class="text-h3">Task Manager</div>
                <q-icon name="fab fa-php" size="80px"/>
                <div class="text-h5">Module: Web Development</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Task Manager</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Main}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/tasks.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Log In</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Log_In}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="login.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/login.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Sign Up</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Sign_Up}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="register.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/register.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">New Task</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.New_Task}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="new_task.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/new_task.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Import and Export Tasks</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Import_Export_Tasks}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom-left"><q-btn stack color="primary" icon="open_in_new" label="import_tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/import_tasks.php')"/></div>
                    <div class="q-pa-md absolute-bottom-right"><q-btn stack color="primary" icon="open_in_new" label="export_tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/export_task.php')"/></div>
                  </q-card>
                </div>
                <q-dialog
                    v-model="dialog"
                    persistent
                    :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Task Manager
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <img
                        src="../assets/task_manager_0.png"
                        spinner-color="white"
                        :width="windowWidth"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-dialog
                    v-model="dialog_1"
                    persistent
                    :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Task Manager
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <img
                        src="../assets/task_manager_1.png"
                        spinner-color="white"
                        :width="windowWidth"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/task_manager_0.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-img
                  src="../assets/task_manager_1.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog_1 = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Task Manager
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-php" size="30px" class="q-ml-sm"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Task-Manager')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Lift Algorithm" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Lift Algorithm</div>
                <q-icon name="fab fa-python" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Data Structures and Algorithms</div>
                <q-separator inset dark/>
                <div class="row q-pa-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Lift Algorithm</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Lift_Algorithm.Main}}
                    </q-card-section>
                    <div class="q-pa-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="lift_algorithm.py" v-on:click="redirect('https://github.com/will09122000/Lift-Algorithim/blob/master/lift_algorithm.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Settings</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section>
                      {{text.First_Year.Lift_Algorithm.Settings}}
                    </q-card-section>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Base Algorithm</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section>
                      {{text.First_Year.Lift_Algorithm.Base_Algorithm}}
                    </q-card-section>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Improved Algorithm</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section>
                      {{text.First_Year.Lift_Algorithm.Improved_Algorithm}}
                    </q-card-section>
                  </q-card>
                </div>
                <q-video
                  :ratio="16/9"
                  src="https://www.youtube.com/embed/l_47qbni9mY?rel=0"
                />
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Lift Algorithm
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Lift-Algorithim')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>
        </q-tab-panels>

      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
// import Prism from 'vue-prism-component'
import { openURL } from 'quasar'
import TextJson from '../text.json'

export default {
  methods: {
    redirect: function (text) {
      openURL(text)
    },
    getPic (index) {
      return `../assets/ ${String(index)} .png`
    },
    handleResize () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.width = `${window.innerWidth}px`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.height = `${window.innerHeight}px`
    }
  },
  data () {
    return {
      window: {
        width: '0px',
        height: '0px'
      },
      root: '1st Year',
      personal: 'Discord Bot',
      gcse: 'A452',
      first_year: 'Countdown Simulator',
      smart_alarm_clock_code: null,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      text: TextJson,
      dialog: false,
      dialog_1: false,
      maximizedToggle: true
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/will09122000/Smart-Alarm-Clock/master/Smart_Alarm_Clock.py')
      .then(response => (this.smart_alarm_clock_code = response))
      .catch((e) => console.log(e))
  },
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // Prism
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
}
</script>

<style>
.code {
  width:650px;
  height:800px;
}

div.inline {
  display: inline-block;
  text-align: center;
}

.my-card {
  width: 100%;
  max-width: 300px;
}

.q-img {
  max-width: 1500px;
}

.q-video {
  max-width: 1500px;
}

</style>
