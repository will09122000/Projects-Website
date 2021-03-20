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
          <q-tab name="ALevel" label="A-Level" />
          <q-tab name="Personal" label="Personal" />
          <q-tab name="1st Year" label="1st Year" />
          <q-tab name="2nd Year" label="2nd Year" />
          <q-tab name="3rd Year" label="3rd Year" />
          <q-tab name="4th Year" label="4th Year" />
        </q-tabs>

        <q-separator dark inset/>

        <q-tab-panels v-model="root" animated class="bg-grey-9 text-white">
          <q-tab-panel name="ALevel">
            <q-tabs
              v-model="ALevel"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="RowData" label="RowData" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="ALevel" animated class="bg-purple-1 text-center">
              <q-tab-panel name="RowData" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/RowData_logo.png"
                    spinner-color="white"
                    width="15%"
                    height="15%"
                  />
                </div>

                <q-icon name="fab fa-python" size="80px"/>
                <div class="q-mt-md q-mb-md">
                  {{text.ALevel.RowData.a}}<br>
                </div>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Log In</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.ALevel.RowData.Login}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            RowData Log In
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/RowData_login.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/RowData_login.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />

                  </q-card>
                    <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Main Menu</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.ALevel.RowData.Menu}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            RowData Menu
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/RowData_menu.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/RowData_menu.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>

                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Just Row</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.ALevel.RowData.Justrow}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            RowData Just Row
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/RowData_justrow.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/RowData_justrow.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>

                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Rowing Summary</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.ALevel.RowData.Summary}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            RowData Rowing Summary
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/RowData_summary.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/RowData_summary.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>

                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Personal Best</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.ALevel.RowData.Pb}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            RowData Personal Best
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/RowData_pb.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/RowData_pb.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>

                </div>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      RowData
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/RowData')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>

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
                <div class="text-h3 q-mb-sm">Discord Bot</div>
                <q-icon name="fab fa-js-square" size="80px"/>
                <div class="q-mt-md q-mb-md">
                  {{text.Personal.Discord_Bot.a}}<br>
                  {{text.Personal.Discord_Bot.b}}
                </div>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Reminders</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Reminders}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Discord Bot
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/Discord_Bot_Reminders.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/Discord_Bot_Reminders.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Weather</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Weather}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Discord Bot
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/Discord_Bot_Weather.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/Discord_Bot_Weather.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Stats</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Stats}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Discord Bot
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/Discord_Bot_Stats.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/Discord_Bot_Stats.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Roles</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Roles}}</q-card-section>
                    <q-dialog
                      v-model="dialog"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Discord Bot
                          </div>
                          <q-space />
                          <q-btn flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                          </q-btn>
                        </q-bar>
                        <q-card-section class="row justify-center">
                          <q-img
                            src="../assets/Discord_Bot_Roles.png"
                            spinner-color="white"
                          />
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                    <q-img
                      src="../assets/Discord_Bot_Roles.png"
                      spinner-color="white"
                    >
                    </q-img>
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Text to Speech</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.TTS}}</q-card-section>
                  </q-card>
                </div>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Discord Bot
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-js-square" size="30px" class="q-ml-xs"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>
              <q-tab-panel name="This Website" class="bg-grey-8">
                <div class="text-h6">This Website</div>
                <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Projects-Website')"/>              </q-tab-panel>
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6 text-bold">Countdown Simulator</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Countdown_Simulator.a}} <br>
                      {{text.First_Year.Countdown_Simulator.b}} <br>
                      {{text.First_Year.Countdown_Simulator.c}} <br>
                      {{text.First_Year.Countdown_Simulator.d}} <br>
                      {{text.First_Year.Countdown_Simulator.e}} <br>
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="countdown_simulator.py" v-on:click="redirect('https://github.com/will09122000/Countdown-Simulator/blob/master/Countdown%20Simulator/countdown_simulator.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6 text-bold">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section>
                      {{text.First_Year.Countdown_Simulator.WDIL}}
                    </q-card-section>
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
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/countdown_simulator_0.png"
                  spinner-color="white"
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Smart Alarm Clock</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Smart_Alarm_Clock.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/Smart_Alarm_Clock.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Notifications</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Notifications}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="notifications.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/notifications.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Alarms</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Alarms}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="alarm.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/alarm.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Weather</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Weather}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="weather.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/weather.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">News</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.News}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="news.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/news.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.WDIL}}
                    </q-card-section>
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Barnaby's Brewhouse</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Main}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="barnabys_brewhouse.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/barnabys_brewhouse.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Batch Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Batch_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="batch_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/batch_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Tank Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Tank_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="tank_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/tank_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Inventory</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Inventory}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="inventory.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/inventory.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Order Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Order_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="order_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/order_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Beer Suggestion</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Beer_Suggestion}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="beer_suggestion.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/beer_suggestion.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Sales Preditions</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Sales_Predictions}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="sales_predictions.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/sales_predictions.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">What did I learn?</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.WDIL}}
                  </q-card-section>
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md">
                  <q-card dark bordered class="bg-grey-9 row justify-center">
                    <q-card-section>
                      <div class="text-h6">Beanbag Store</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Beanbag_Store.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Source" v-on:click="redirect('https://github.com/will09122000/Beanbag-Store/tree/master/src/beanbags')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 row justify-center">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Beanbag_Store.WDIL}}
                    </q-card-section>
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Task Manager</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/tasks.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Log In</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Log_In}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="login.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/login.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Sign Up</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Sign_Up}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="register.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/register.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">New Task</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.New_Task}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="new_task.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/new_task.php')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Import and Export Tasks</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.Import_Export_Tasks}}
                    </q-card-section>
                    <div class="q-py-md q-gutter-md justify-center">
                      <q-btn stack color="primary" icon="open_in_new" label="import_tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/import_tasks.php')"/>
                      <q-btn stack color="primary" icon="open_in_new" label="export_tasks.php" v-on:click="redirect('https://github.com/will09122000/Task-Manager/blob/master/export_task.php')"/>
                    </div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Task_Manager.WDIL}}
                    </q-card-section>
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
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Lift Algorithm</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Lift_Algorithm.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="lift_algorithm.py" v-on:click="redirect('https://github.com/will09122000/Lift-Algorithim/blob/master/lift_algorithm.py')"/></div>
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
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Lift_Algorithm.WDIL}}
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

          <q-tab-panel name="2nd Year">
            <q-tabs
              v-model="second_year"
              no-caps
              mobile-arrows
              outside-arrows
            >
              <q-tab name="Card Game" label="Card Game" />
              <q-tab name="Functional Programming" label="Functional Programming" />
              <q-tab name="Logic Programming" label="Logic Programming" />
              <q-tab name="Group Software Engineering Project" label="Group Software Engineering Project"/>
              <q-tab name="8-Puzzle Problem" label="8-Puzzle Problem" />
              <q-tab name="Post Office Queues" label="Post Office Queues" />
              <q-tab name="Vaccine Ordering" label="Vaccine Ordering" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="second_year" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Card Game" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Card Game</div>
                <q-icon name="fab fa-java" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Software Development</div>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Card Game</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.Second_Year.Card_Game.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Smart_Alarm_Clock.py" v-on:click="redirect('https://github.com/will09122000/Card-Game/blob/main/src/main/CardGame.java')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Card Class</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Notifications}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Card.java" v-on:click="redirect('https://github.com/will09122000/Card-Game/blob/main/src/main/Card.java')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Card Deck Class</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Alarms}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="CardDeck.java" v-on:click="redirect('https://github.com/will09122000/Card-Game/blob/main/src/main/CardDeck.java')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Player Class</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Alarms}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Player.java" v-on:click="redirect('https://github.com/will09122000/Card-Game/blob/main/src/main/Player.java')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.WDIL}}
                    </q-card-section>
                  </q-card>
                </div>

                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Card Game
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-java" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Card-Game')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Functional Programming" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Functional Programming</div>
                <q-icon name="fab fa-haskell" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
                <q-separator dark class="q-mt-sm"/>
                <!--
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Smart Alarm Clock</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Main}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Smart_Alarm_Clock.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/Smart_Alarm_Clock.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Notifications</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Notifications}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="notifications.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/notifications.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Alarms</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Alarms}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="alarm.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/alarm.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">Weather</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.Weather}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="weather.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/weather.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">News</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.News}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="news.py" v-on:click="redirect('https://github.com/will09122000/Smart-Alarm-Clock/blob/master/news.py')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.First_Year.Smart_Alarm_Clock.WDIL}}
                    </q-card-section>
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
                        Functional Programming
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
                -->
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Functional Programming
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-haskell" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Functional-Programming')"/>
                  </q-toolbar>
                </q-footer>
                <!--
                <prism language="python" class="code">
                  {{ smart_alarm_clock_code.data }}
                </prism>
                -->
              </q-tab-panel>

              <q-tab-panel name="Logic Programming" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Logic Programming</div>
                <q-icon name="fab fa-prolog" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
                <q-separator dark class="q-mt-sm"/>
                <!--
                <div class="row q-py-md q-gutter-md justify-center">
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Logic Programming</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Main}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="barnabys_brewhouse.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/barnabys_brewhouse.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Batch Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Batch_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="batch_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/batch_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Tank Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Tank_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="tank_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/tank_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Inventory</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Inventory}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="inventory.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/inventory.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Order Management</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Order_Management}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="order_management.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/order_management.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Beer Suggestion</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Beer_Suggestion}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="beer_suggestion.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/beer_suggestion.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">Sales Preditions</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.Sales_Predictions}}
                  </q-card-section>
                  <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="sales_predictions.py" v-on:click="redirect('https://github.com/will09122000/Barnabys-Brewhouse/blob/master/sales_predictions.py')"/></div>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card">
                  <q-card-section>
                    <div class="text-h6">What did I learn?</div>
                  </q-card-section>
                  <q-separator dark inset />
                  <q-card-section class="q-mb-xl">
                    {{text.First_Year.Barnabys_Brewhouse.WDIL}}
                  </q-card-section>
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
                        Logic Programming
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
                -->
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Logic Programming
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-prolog" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Logic-Programming')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Group Software Engineering Project" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Group Software Engineering Project</div>
                <q-icon name="fab fa-react" size="80px"/>
                <q-separator dark class="q-mt-sm"/>

                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Group Software Engineering Project
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-react" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Unite')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="8-Puzzle Problem" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">8-Puzzle Problem</div>
                <q-icon name="fab fa-python" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: Artificial Intelligence and Applications</div>
                <q-separator dark class="q-mt-sm"/>

                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      8-Puzzle Problem
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/ECM2423_Coursework/blob/main/question_1.2.py')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Post Office Queues" class="bg-grey-8">
                <div class="text-h3">Post Office Queues</div>
                <q-icon name="fab fa-c" size="80px"/>
                <div class="text-h5">Module: The C Family</div>
                <q-separator dark class="q-mt-sm"/>

                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Post Office Queues
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-c" size="30px" class="q-ml-sm"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Post-Office-Queue')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Vaccine Ordering" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Vaccine Ordering</div>
                <q-icon name="fab fa-c++" size="80px"/>
                <div class="text-h5 q-mt-sm">Module: The C Family</div>
                <q-separator dark class="q-mt-sm"/>

                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Vaccine Ordering
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-c++" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Vaccine-Ordering')"/>
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
      root: 'ALevel',
      ALevel: 'RowData',
      personal: 'Discord Bot',
      first_year: 'Countdown Simulator',
      second_year: 'Card Game',
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
  background-color: #36393F;
}

.my-card-wide {
  width: 100%;
  max-width: 600px;
  background-color: #36393F;
}

.q-img {
  max-width: 1500px;
}

</style>
