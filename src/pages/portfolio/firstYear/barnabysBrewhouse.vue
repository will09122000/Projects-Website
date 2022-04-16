<template>
<div class="bg-grey-8 text-center">
  <div class="text-h3 q-mb-sm">Barnaby's Brewhouse</div>
  <div class="text-h5 q-mt-sm">Module: Programming</div>
  <div class="text-h5 q-mt-sm">Grade: 98%</div>
  <q-icon name="fab fa-python" size="80px" />
  <q-separator dark class="q-mt-sm" />
  <div class="row q-py-md q-gutter-md justify-center">

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Barnaby's Brewhouse</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Main}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="barnabys_brewhouse.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/barnabys_brewhouse.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Batch Management</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Batch_Management}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="batch_management.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/batch_management.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Tank Management</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Tank_Management}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="tank_management.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/tank_management.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Inventory</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Inventory}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="inventory.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/inventory.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Order Management</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Order_Management}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="order_management.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/order_management.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Beer Suggestion</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Beer_Suggestion}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="beer_suggestion.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/beer_suggestion.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Sales Preditions</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-mb-xl">
        {{text.First_Year.Barnabys_Brewhouse.Sales_Predictions}}
      </q-card-section>
      <div class="q-py-md absolute-bottom">
        <q-btn class="redirect" type="a" label="sales_predictions.py" href="https://github.com/will09122000/Barnabys-Brewhouse/blob/master/sales_predictions.py" icon="open_in_new" color="primary" target="_blank" />
      </div>
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

  <customImage filename="barnabys_brewhouse_0.png" imageDescription="Barnaby's Brewhouse" />

  <q-footer elevated>
    <q-toolbar class="bg-secondary text-white">
      <div class="text-left text-body2 q-mr-sm">
        Barnaby's Brewhouse
      </div>
      <q-separator dark vertical inset />
      <q-icon name="fab fa-python" size="30px" class="q-ml-xs" />
      <q-toolbar-title class="text-right"></q-toolbar-title>
      <q-btn class="redirect" type="a" label="GitHub" href="https://github.com/will09122000/Barnabys-Brewhouse" icon="open_in_new" color="primary" target="_blank" />
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
