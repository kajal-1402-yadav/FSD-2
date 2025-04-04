import ch from 'chalk'
import val from 'validator'

const data=ch.red.bold("hello")+ch.bgBlue.underline.italic(" lju")
console.log(data)
console.log(val.isLowercase(data),val.isEmail(data))