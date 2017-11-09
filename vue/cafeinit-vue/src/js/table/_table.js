/**
 * @fileoverview table
 * @author: burning <www.cafeinit.com>
 * @version: 2016-12-23
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    striped: {
      type: String,
      default: ''
    },

    bordered: {
      type: String,
      default: ''
    },

    hover: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return [
        this.ns + 'table',
        this.striped ? (this.ns + 'table-striped') : '',
        this.bordered ? (this.ns + 'table-bordered') : '',
        this.hover ? (this.ns + 'table-hover') : ''
      ]
    }
  }
}
