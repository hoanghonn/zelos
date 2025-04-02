// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { landing } from "controllers/landing"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)
eagerLoadControllersFrom("controllers", landing)
