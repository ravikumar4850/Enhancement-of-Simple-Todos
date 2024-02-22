@@ -0,0 +1,6 @@
/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from '@testing-library/react'

configure({testIdAttribute: 'testid'})