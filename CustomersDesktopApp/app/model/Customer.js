/*
 * File: app/model/Customer.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'company'
        },
        {
            name: 'notes'
        },
        {
            name: 'lat',
            type: 'float'
        },
        {
            name: 'lng',
            type: 'float'
        }
    ],

    validations: [
        {
            type: 'presence',
            field: 'company'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://192.168.0.24:51266/api/customer/'
    }
});