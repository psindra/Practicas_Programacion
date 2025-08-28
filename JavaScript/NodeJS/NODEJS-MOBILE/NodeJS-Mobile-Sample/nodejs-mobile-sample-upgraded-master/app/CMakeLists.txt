cmake_minimum_required(VERSION 3.4.1)

# Creates and names a library, sets it as either STATIC or SHARED,
# and provides the relative paths to its source code.
add_library( # Sets the name of the library.
        native-lib

        # Sets the library as a shared library.
        SHARED

        # Provides a relative path to your source file(s).
        src/main/cpp/native-lib.cpp )

# Includes node's header files.
include_directories(libnode/include/node/)

# Imports the pre-built libnode shared library.
add_library( libnode
        SHARED
        IMPORTED )

set_target_properties( # Specifies the target library.
        libnode

        # Specifies the parameter you want to define.
        PROPERTIES IMPORTED_LOCATION

        # Provides the path to the libnode shared library.
        ${CMAKE_SOURCE_DIR}/libnode/bin/${ANDROID_ABI}/libnode.so )

# Find the log library (Android system library).
find_library( # Sets the name of the path variable.
        log-lib

        # Specifies the name of the NDK library that you want CMake to locate.
        log )

# Link the required libraries to your target native-lib.
target_link_libraries( # Specifies the target library.
        native-lib

        # Link the libnode library.
        libnode

        # Link the log library from the NDK.
        ${log-lib} )
