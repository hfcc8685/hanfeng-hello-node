'use strict'

import test from 'ava'
import hello from './helloworld'

test('first test', t => {
  t.is(hello.say(), 'hello world!')
})

test('second test', t => {
  t.is('123', '123')
})
