import { createAction, props } from "@ngrx/store";
import { Course } from "../model/course";
import { Update } from "@ngrx/entity";

const ACTIONTYPE_LIST = "[Courses Resolver] Load All Courses";
const ACTIONTYPE_LOAD = "[Load Courses Effect] All Courses Loaded";
const ACTIONTYPE_UPDATE = "[Edit Course Dialog] Course Updated";

export const loadAllCourses = createAction(ACTIONTYPE_LIST);

export const allCoursesLoaded = createAction(
  ACTIONTYPE_LOAD,
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  ACTIONTYPE_UPDATE,
  props<{ update: Update<Course> }>()
);
