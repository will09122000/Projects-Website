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
          <q-tab name="1st Year" label="1st Year" />
          <q-tab name="2nd Year" label="2nd Year" />
          <q-tab name="3rd Year" label="3rd Year" />
          <q-tab name="Personal" label="Personal" />
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
            </q-tabs>
            <rowData/>
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
              <q-tab name="Rally Results Reader" label="Rally Results Reader" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="personal" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Discord Bot" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/EERC.png"
                    spinner-color="white"
                    width="20%"
                    class="q-mt-sm"
                  />
                </div>
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
                      v-model="DiscordBotRemindersFullscreen"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Reminders
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
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="DiscordBotRemindersFullscreen = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Weather</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Weather}}</q-card-section>
                    <q-dialog
                      v-model="DiscordBotWeatherFullscreen"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Weather
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
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="DiscordBotWeatherFullscreen = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Stats</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Stats}}</q-card-section>
                    <q-dialog
                      v-model="DiscordBotStatsFullscreen"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Stats
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
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="DiscordBotStatsFullscreen = true" />
                  </q-card>
                  <q-card dark bordered class="my-card-wide">
                    <q-card-section><div class="text-h6">Roles</div></q-card-section>
                    <q-separator dark inset />
                    <q-card-section>{{text.Personal.Discord_Bot.Roles}}</q-card-section>
                    <q-dialog
                      v-model="DiscordBotRolesFullscreen"
                      persistent
                      :maximized="maximizedToggle"
                    >
                      <q-card class="bg-grey-8 text-white">
                        <q-bar class="bg-secondary">
                          <div class="text-body-2">
                            Roles
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
                    <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="DiscordBotRolesFullscreen = true" />
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
                <div class="text-h3 q-mb-sm">This Website</div>
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/vue-js.png"
                    spinner-color="white"
                    width="15%"
                    class="q-mt-sm"
                  />
                  <q-img
                    src="../assets/quasar.png"
                    spinner-color="white"
                    width="19%"
                    class="q-mt-sm"
                  />
                </div>
                <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Projects-Website')"/>
              </q-tab-panel>
              <q-tab-panel name="Rally Results Reader" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Rally Results Reader</div>
                <q-icon name="fab fa-python" size="80px"/>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6">Rally Results Reader</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section class="q-mb-xl">
                      {{text.Personal.Rally_Results_Reader}}
                    </q-card-section>
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="reader.py" v-on:click="redirect('https://github.com/will09122000/Countdown-Simulator/blob/master/Countdown%20Simulator/countdown_simulator.py')"/></div>
                  </q-card>
                </div>
                <div class="text-h6 q-mb-sm">Ingests Rally Results Screenshot</div>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Rally Result Screenshot
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/rally_results_reader_1.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/rally_results_reader_1.png"
                  spinner-color="white"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img><br><br>
                <div class="text-h6 q-mb-sm">Outputs Rally Results CSV File</div>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Rally Result CSV File
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/rally_results_reader_2.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/rally_results_reader_2.png"
                  spinner-color="white"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img><br><br>
                <div class="text-h6 q-mb-sm">CSV File Uploaded to <a href="https://beta.eerc.info/Leagues/DIRT"> Website</a></div>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Rally Result CSV File
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/rally_results_reader_3.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/rally_results_reader_3.png"
                  spinner-color="white"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Rally Results Reader
                    </div>
                    <q-separator dark vertical inset />
                    <q-icon name="fab fa-python" size="30px" class="q-ml-xs"/>
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/Results-Reader')"/>
                  </q-toolbar>
                </q-footer>
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
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-icon name="fab fa-python" size="80px"/>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6">Countdown Simulator</div>
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
                      <div class="text-h6">What did I learn?</div>
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
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-icon name="fab fa-python" size="80px"/>
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
              </q-tab-panel>

              <q-tab-panel name="Barnaby's Brewhouse" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Barnaby's Brewhouse</div>
                <div class="text-h5 q-mt-sm">Module: Programming</div>
                <q-icon name="fab fa-python" size="80px"/>
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
                <div class="text-h5 q-mt-sm">Module: Object-Oritentated Programming</div>
                <q-icon name="fab fa-java" size="80px"/>
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
                <div class="text-h5">Module: Web Development</div>
                <q-icon name="fab fa-php" size="80px"/>
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
                    v-model="Task_Manager1Fullscreen"
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
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-dialog
                    v-model="Task_Manager2Fullscreen"
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
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/task_manager_0.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="Task_Manager1Fullscreen = true" />
                </q-img>
                <q-img
                  src="../assets/task_manager_1.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="Task_Manager2Fullscreen = true" />
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
                <div class="text-h5 q-mt-sm">Module: Data Structures and Algorithms</div>
                <q-icon name="fab fa-python" size="80px"/>
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
              <q-tab name="Unite" label="Unite!"/>
              <q-tab name="8-Puzzle Problem" label="8-Puzzle Problem" />
              <q-tab name="Post Office Queues" label="Post Office Queues" />
              <q-tab name="Vaccine Ordering" label="Vaccine Ordering" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="second_year" animated class="bg-purple-1 text-center">
              <q-tab-panel name="Card Game" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Card Game</div>
                <div class="text-h5 q-mt-sm">Module: Software Development</div>
                <q-icon name="fab fa-java" size="80px"/>
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
                    <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="CardGame.py" v-on:click="redirect('https://github.com/will09122000/Card-Game/blob/main/src/main/CardGame.java')"/></div>
                  </q-card>
                  <q-card dark bordered class="bg-grey-9 my-card">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section class="q-mb-xl">
                      {{text.Second_Year.Card_Game.WDIL}}
                    </q-card-section>
                  </q-card>

                   <q-pdfviewer
                    v-model="visible"
                    src="../assets/CardGameReport.pdf"
                    type="pdfjs"
                  />
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
                <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/haskell.png"
                    spinner-color="white"
                    width="13%"
                    class="q-mt-sm"
                  />
                </div>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <div class="my-row">
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Question 1</div>
                      </q-card-section>
                      <q-separator dark inset />
                      <q-card-section class="q-mb-xl">
                        {{text.Second_Year.Functional_Programming.Question_1_1}}
                        <ul>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_1_2}}</li>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_1_3}}</li>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_1_4}}</li>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_1_5}}</li>
                        </ul>
                      </q-card-section>
                      <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="puzzle.hs" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Functional-Programming/blob/main/puzzle.hs')"/></div>
                    </q-card>
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Question 2</div>
                      </q-card-section>
                      <q-separator dark inset />
                      <q-card-section class="q-mb-xl">
                        {{text.Second_Year.Functional_Programming.Question_2_1}}
                        <ul>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_2_2}}</li>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_2_3}}</li>
                          <li class="list">{{text.Second_Year.Functional_Programming.Question_2_4}}</li>
                        </ul>
                        {{text.Second_Year.Functional_Programming.Question_2_5}}
                      </q-card-section>
                      <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="GameOfLife.hs" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Functional-Programming/blob/main/gameOfLife.hs')"/></div>
                    </q-card>
                  </div>
                    <q-card dark bordered class="bg-grey-9 my-column">
                        <q-card-section>
                          <div class="text-h6">What did I learn?</div>
                        </q-card-section>
                        <q-separator dark inset />
                        <q-card-section class="q-mb-xl">
                          {{text.Second_Year.Functional_Programming.WDIL}}
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
                          Question 2 - Glider Pattern
                        </div>
                        <q-space />
                        <q-btn flat icon="close" v-close-popup>
                          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                        </q-btn>
                      </q-bar>
                      <q-card-section class="row justify-center">
                        <q-img
                          src="../assets/glider_pattern.png"
                          spinner-color="white"
                        />
                      </q-card-section>
                    </q-card>
                </q-dialog>
                <q-img
                  src="../assets/glider_pattern.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                  <div class="absolute-bottom-left text-subtitle2">
                    Question 2 - Glider Pattern
                  </div>
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Functional Programming
                    </div>
                    <q-separator dark vertical inset />
                    <q-img
                      src="../assets/haskell.png"
                      spinner-color="white"
                      width="5%"
                      class="q-ml-sm"
                    />
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Functional-Programming')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Logic Programming" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">Logic Programming</div>
                <div class="text-h5 q-mt-sm">Module: Computer Languages & Representations</div>
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/prolog.png"
                    spinner-color="white"
                    width="10%"
                    class="q-mt-sm"
                  />
                </div>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <div class="my-row">
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Question 1</div>
                      </q-card-section>
                      <q-separator dark inset />
                      <q-card-section class="q-mb-xl">
                        {{text.Second_Year.Logical_Programming.Question_1_1}}
                        <ul>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_1_2}}</li>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_1_3}}</li>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_1_4}}</li>
                        </ul>
                      </q-card-section>
                      <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Question1.pl" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Logic-Programming/blob/main/Question1.pl')"/></div>
                    </q-card>
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Question 2</div>
                      </q-card-section>
                      <q-separator dark inset />
                      <q-card-section class="q-mb-xl">
                        {{text.Second_Year.Logical_Programming.Question_2_1}}
                        <ul>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_2_2}}</li>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_2_3}}</li>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_2_4}}</li>
                          <li class="list">{{text.Second_Year.Logical_Programming.Question_2_5}}</li>
                        </ul>
                      </q-card-section>
                      <div class="q-py-md absolute-bottom"><q-btn color="primary" icon="open_in_new" label="Question2.pl" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Logic-Programming/blob/main/Question2.pl')"/></div>
                    </q-card>
                  </div>
                    <q-card dark bordered class="bg-grey-9 my-column">
                        <q-card-section>
                          <div class="text-h6">What did I learn?</div>
                        </q-card-section>
                        <q-separator dark inset />
                        <q-card-section class="q-mb-xl">
                          {{text.Second_Year.Functional_Programming.WDIL}}
                        </q-card-section>
                      </q-card>
                </div>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Logic Programming
                    </div>
                    <q-separator dark vertical inset />
                    <q-img
                      src="../assets/prolog.png"
                      spinner-color="white"
                      width="4.5%"
                      class="q-ml-sm"
                    />
                    <q-toolbar-title class="text-right"></q-toolbar-title>
                    <q-btn class="redirect" color="primary" icon="open_in_new" label="GitHub" v-on:click="redirect('https://github.com/will09122000/ECM2418-CA-Logic-Programming')"/>
                  </q-toolbar>
                </q-footer>
              </q-tab-panel>

              <q-tab-panel name="Unite" class="bg-grey-8">
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/unite_logo.png"
                    spinner-color="white"
                    width="16%"
                    class="q-mt-sm"
                  />
                </div>
                <div class="text-h3 q-mb-sm">Unite!</div>
                <div class="text-h5 q-mb-sm">Module: Group Software Engineering Project</div>
                <q-icon name="fab fa-react" size="80px"/>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6">Unite!</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section>
                      {{text.Second_Year.Unite.Main}}
                    </q-card-section>
                  </q-card>
                  <div class="my-row">
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Team Feedback</div>
                      </q-card-section>
                      <q-separator dark inset/>
                      <q-card-section>
                        <ul>
                          <li class="list">"{{text.Second_Year.Unite.Feedback_1}}"</li>
                          <li class="list">"{{text.Second_Year.Unite.Feedback_2}}"</li>
                          <li class="list">"{{text.Second_Year.Unite.Feedback_3}}"</li>
                        </ul>
                      </q-card-section>
                    </q-card>
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">What did I learn?</div>
                      </q-card-section>
                      <q-separator dark inset/>
                      <q-card-section>
                        {{text.Second_Year.Unite.WDIL}}
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <q-dialog
                  v-model="dialog"
                  persistent
                  :maximized="maximizedToggle"
                >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Unite!
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/poster.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/poster.png"
                  spinner-color="white"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-footer elevated>
                  <q-toolbar class="bg-secondary text-white">
                    <div class="text-left text-body2 q-mr-sm">
                      Unite!
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
                <div class="text-h5 q-mt-sm">Module: Artificial Intelligence and Applications</div>
                <q-icon name="fab fa-python" size="80px"/>
                <q-separator dark class="q-mt-sm"/>
                <div class="row q-py-md q-gutter-md justify-center">
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6">The 8-Puzzle Problem</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section>
                      {{text.Second_Year.Puzzle_Problem.Main}}
                    </q-card-section>
                  </q-card>
                  <div class="my-row">
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Manhattan Distance Heuristic</div>
                      </q-card-section>
                      <q-separator dark inset/>
                      <q-card-section>
                        {{text.Second_Year.Puzzle_Problem.Manhattan}}
                      </q-card-section>
                    </q-card>
                    <q-card dark bordered class="bg-grey-9 my-column">
                      <q-card-section>
                        <div class="text-h6">Euclidean Distance Heuristic</div>
                      </q-card-section>
                      <q-separator dark inset/>
                      <q-card-section>
                        {{text.Second_Year.Puzzle_Problem.Euclidean}}
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
                        Manhattan Distance Heuristic
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/8-puzzle_problem_2.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/8-puzzle_problem_2.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                <q-dialog
                    v-model="dialog"
                    persistent
                    :maximized="maximizedToggle"
                  >
                  <q-card class="bg-grey-8 text-white">
                    <q-bar class="bg-secondary">
                      <div class="text-body-2">
                        Euclidean Distance Heuristic
                      </div>
                      <q-space />
                      <q-btn flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                      </q-btn>
                    </q-bar>
                    <q-card-section class="row justify-center">
                      <q-img
                        src="../assets/8-puzzle_problem_1.png"
                        spinner-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
                <q-img
                  src="../assets/8-puzzle_problem_1.png"
                  spinner-color="white"
                  class="max-width-200"
                >
                  <q-btn class="q-ma-md absolute-bottom-right" dense icon="open_in_full" color="secondary" @click="dialog = true" />
                </q-img>
                  <q-card dark bordered class="bg-grey-9">
                    <q-card-section>
                      <div class="text-h6">What did I learn?</div>
                    </q-card-section>
                    <q-separator dark inset/>
                    <q-card-section>
                      {{text.Second_Year.Puzzle_Problem.WDIL}}
                    </q-card-section>
                  </q-card>
                </div>
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
                <div class="text-h5">Module: The C Family</div>
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/c.png"
                    spinner-color="white"
                    width="8%"
                    class="q-mt-sm"
                  />
                </div>
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
                <div class="text-h5 q-mt-sm">Module: The C Family</div>
                <div class="text-h3 q-mb-sm">
                  <q-img
                    src="../assets/c++.png"
                    spinner-color="white"
                    width="6%"
                    class="q-mt-sm"
                  />
                </div>
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
import openURL from 'quasar'
import TextJson from '../text.json'

import rowData from './portfolio/alevel/rowData.vue'

export default {
  methods: {
    redirect: function (text) {
      openURL(text)
    },
    getPic (index) {
      return `../assets/${String(index)}.png`
    },
    handleResize () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.width = `${window.innerWidth}px`
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      this.window.height = `${window.innerHeight}px`
    }
  },
  components: {
    rowData
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
      RowDataFullscreen: false,
      RowDataLoginFullscreen: false,
      RowDataMenuFullscreen: false,
      RowDataJustrowFullscreen: false,
      RowDataSummaryFullscreen: false,
      RowDataPBFullscreen: false,
      DiscordBotRemindersFullscreen: false,
      DiscordBotWeatherFullscreen: false,
      DiscordBotStatsFullscreen: false,
      DiscordBotRolesFullscreen: false,
      Task_Manager1Fullscreen: false,
      Task_Manager2Fullscreen: false,
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

div.inline {
  display: inline-block;
  text-align: center;
}

.my-card {
  width: 100%;
  max-width: 300px;
  background-color: #36393F;
}

.my-column {
  float: left;
  width: 50%;
  background-color: #36393F;
  flex: 1;
}

.my-row {
  content: "";
  display: flex;
  clear: both;
  column-gap: 15px;
}

.my-card-wide {
  width: 100%;
  max-width: 600px;
  background-color: #36393F;
}

.q-img {
  max-width: 1000px;
}

.list {
  text-align: left;
}

</style>
