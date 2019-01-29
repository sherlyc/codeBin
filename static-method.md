* If you are writing utility classes and they are not supposed to be changed.
* If the method is not using any instance variable.
* If any operation is not dependent on instance creation.
* If there is some code that can easily be shared by all the instance methods, extract that code into a static method.
* If you are sure that the definition of the method will never be changed or overridden. As static methods can not be overridden.
