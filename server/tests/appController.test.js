const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
chai.should()
const { expect } = chai

describe('placeholder', () => {
  it('placeholder it', () => {
    expect(1).to.be.eq(1)
  })
})