import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  expandContent = true;
  data1 = [{ 
     'aria': 'חאט',
    'safebox': '222',
    'email': '222@fnx.com',
    'phone': '124-896-8963',
    'expanded': false
  }, {
     'aria': 'אלמנטרי',
    'safebox': '333',
    'email': '333@fnx.com',
    'phone': '124-896-1234',
    'expanded': false
  }, {
     'aria': 'תביעות',
    'safebox': '444',
    'email': '444@fnx.com',
    'phone': '124-896-9632',
    'expanded': false
  },
  ]

  data2 = [{
    'whoseData': 'חאט',
    'datades': {
       'subaria': 'חיווים',
      'safebox': '222',
      'email': '222@fnx.com',
      'phone': '0522222222'
    }
  },
   {
    'whoseData': 'חאט',
    'datades': {
       'subaria': 'עמלות',
      'safebox': '222',
      'email': '222@fnx.com',
      'phone': '0522222222'
    }
  },
  {
    'whoseData': 'חאט',
    'datades': {
       'subaria': 'הפקות',
      'safebox': '222',
      'email': '222@fnx.com',
      'phone': '0522222222'
    }
  },
  {
    'whoseData': 'אלמנטרי',
    'datades': {
       'subaria': 'חיווים',
      'safebox': '333',
      'email': '333@fnx.com',
      'phone': '0523333333'
    }
  }, {
    'whoseData': 'אלמנטרי',
    'datades': {
       'subaria': 'עמלות',
      'safebox': '333',
      'email': '333@fnx.com',
      'phone': '0523333333'
    }
 }
    , {
    'whoseData': 'אלמנטרי',
    'datades': {
       'subaria': 'הפקות',
      'safebox': '333',
      'email': '333@fnx.com',
      'phone': '0523333333'
    }
  },
   {
    'whoseData': 'תביעות',
    'datades': {
       'subaria': 'חיווים',
      'safebox': '444',
      'email': '444@fnx.com',
      'phone': '0524444444'
    }
  }, {
    'whoseData': 'תביעות',
    'datades': {
       'subaria': 'עמלות',
      'safebox': '444',
      'email': '444@fnx.com',
      'phone': '0524444444'
    }
 }
    , {
    'whoseData': 'תביעות',
    'datades': {
       'subaria': 'הפקות',
      'safebox': '444',
      'email': '444@fnx.com',
      'phone': '0524444444'
    }
  }
  ]

  findDetails(data) {
    return this.data2.filter(x => x.whoseData === data.aria);
  }

}
