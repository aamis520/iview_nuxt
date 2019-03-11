<template>
  <div>

    <Row :gutter="20">
      <Col :md="12">
      <filter-select></filter-select>
      </Col>
      <Col :md="12">
      <muti-select></muti-select>
      </Col>
    </Row>
  </div>
</template>
<script>
import filterSelect from './filterSelect'
import mutiSelect from './mutiSelect'
export default {
  components: {
    mutiSelect,
    filterSelect
  }
}
</script>
