import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

/* If we for some reason wants to use regular, not solid icons, below is how to import them and then add them
to the default export of library. */

//import { faUserCircle as farUserCircle } from '@fortawesome/free-regular-svg-icons'

export default library.add(faTimes)
