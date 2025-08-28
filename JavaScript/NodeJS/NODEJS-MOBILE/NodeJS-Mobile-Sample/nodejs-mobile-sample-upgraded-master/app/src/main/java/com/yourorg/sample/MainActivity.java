package com.yourorg.sample;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.SharedPreferences;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import android.os.Build;
import java.io.File;

public class MainActivity extends AppCompatActivity {

    // Used to load the 'native-lib' library on application startup.
    static {
        System.loadLibrary("native-lib");
        System.loadLibrary("node");
    }

    public void setLibraryPath() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            String nodeLibPath = getApplicationContext().getFilesDir().getAbsolutePath() + "/nodejs-project/libnode/bin/" + Build.CPU_ABI;
            String stdcxxPath = getApplicationContext().getFilesDir().getAbsolutePath() + "/nodejs-project/libnode/bin/libstdc++.so.6";

            // Set the LD_LIBRARY_PATH
            String currentPath = System.getenv("LD_LIBRARY_PATH");
            String newPath = currentPath != null ? currentPath + ":" + nodeLibPath + ":" + stdcxxPath : nodeLibPath + ":" + stdcxxPath;

            try {
                Process process = Runtime.getRuntime().exec("setenv LD_LIBRARY_PATH " + newPath);
                process.waitFor();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    // We just want one instance of node running in the background.
    public static boolean _startedNodeAlready = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setLibraryPath();
//        setContentView(R.layout.activity_main);

        if (!_startedNodeAlready) {
            _startedNodeAlready = true;
            ExecutorService executor = Executors.newSingleThreadExecutor();
            executor.submit(new Runnable() {
                @Override
                public void run() {
                    // The path where we expect the node project to be at runtime.
                    String nodeDir = getApplicationContext().getFilesDir().getAbsolutePath() + "/nodejs-project";
                    if (wasAPKUpdated()) {
                        // Recursively delete any existing nodejs-project.
                        File nodeDirReference = new File(nodeDir);
                        if (nodeDirReference.exists()) {
                            deleteFolderRecursively(nodeDirReference);
                        }
                        // Copy the node project from assets into the application's data path.
                        copyAssetFolder(getApplicationContext().getAssets(), "nodejs-project", nodeDir);

                        saveLastUpdateTime();
                    }
                    //startNodeWithArguments(new String[]{"node", nodeDir + "/main.js"});
                    startNodeWithArguments(new String[]{"node", nodeDir + "/src/index.js"});
                }
            });
        }

        // agregado mio //////////////////////////////////////////////////////////////
        setContentView(R.layout.activity_webview);
        WebView webView = findViewById(R.id.webView);
        // Enable JavaScript (optional, but often needed for web apps)
        webView.getSettings().setJavaScriptEnabled(true);
        // Set the WebViewClient
        webView.setWebViewClient(new WebViewClient()); // This is the Java syntax
        webView.loadUrl("file:///android_asset/inicio/index.html");
        // agregado mio //////////////////////////////////////////////////////////////


//        final Button buttonVersions = findViewById(R.id.btVersions);
//        final TextView textViewVersions = findViewById(R.id.tvVersions);
//
//        buttonVersions.setOnClickListener(new View.OnClickListener() {
//            public void onClick(View v) {
//                // Network operations should be done in the background.
//                ExecutorService executorService = Executors.newSingleThreadExecutor();
//                executorService.submit(new Runnable() {
//                    @Override
//                    public void run() {
//                        // Declare nodeResponse outside the try-catch block and initialize with a default value.
//                        final StringBuilder nodeResponse = new StringBuilder();
//                        try {
//                            URL localNodeServer = new URL("http://localhost:3000/");
//                            HttpURLConnection urlConnection = (HttpURLConnection) localNodeServer.openConnection();
//                            BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
//                            String inputLine;
//                            while ((inputLine = in.readLine()) != null) {
//                                nodeResponse.append(inputLine);
//                            }
//                            in.close();
//                        } catch (Exception ex) {
//                            nodeResponse.setLength(0); // Clear the StringBuilder in case of error
//                            nodeResponse.append(ex.toString());
//                        }
//
//                        // Run the UI update on the main thread
//                        runOnUiThread(new Runnable() {
//                            @Override
//                            public void run() {
//                                textViewVersions.setText(nodeResponse.toString()); // Display the result
//                            }
//                        });
//                    }
//                });
//            }
//        });
    }

    public native Integer startNodeWithArguments(String[] arguments);

    private boolean wasAPKUpdated() {
        SharedPreferences prefs = getApplicationContext().getSharedPreferences("NODEJS_MOBILE_PREFS", Context.MODE_PRIVATE);
        long previousLastUpdateTime = prefs.getLong("NODEJS_MOBILE_APK_LastUpdateTime", 0);
        long lastUpdateTime = 1;
        try {
            PackageInfo packageInfo = getApplicationContext().getPackageManager().getPackageInfo(getApplicationContext().getPackageName(), 0);
            lastUpdateTime = packageInfo.lastUpdateTime;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return (lastUpdateTime != previousLastUpdateTime);
    }

    private void saveLastUpdateTime() {
        long lastUpdateTime = 1;
        try {
            PackageInfo packageInfo = getApplicationContext().getPackageManager().getPackageInfo(getApplicationContext().getPackageName(), 0);
            lastUpdateTime = packageInfo.lastUpdateTime;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        SharedPreferences prefs = getApplicationContext().getSharedPreferences("NODEJS_MOBILE_PREFS", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putLong("NODEJS_MOBILE_APK_LastUpdateTime", lastUpdateTime);
        editor.apply();
    }

    private static boolean deleteFolderRecursively(File file) {
        try {
            boolean res = true;
            for (File childFile : file.listFiles()) {
                if (childFile.isDirectory()) {
                    res &= deleteFolderRecursively(childFile);
                } else {
                    res &= childFile.delete();
                }
            }
            res &= file.delete();
            return res;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private static boolean copyAssetFolder(AssetManager assetManager, String fromAssetPath, String toPath) {
        try {
            String[] files = assetManager.list(fromAssetPath);
            boolean res = true;

            if (files.length == 0) {
                // If it's a file, it won't have any assets "inside" it.
                res &= copyAsset(assetManager, fromAssetPath, toPath);
            } else {
                new File(toPath).mkdirs();
                for (String file : files) {
                    res &= copyAssetFolder(assetManager, fromAssetPath + "/" + file, toPath + "/" + file);
                }
            }
            return res;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private static boolean copyAsset(AssetManager assetManager, String fromAssetPath, String toPath) {
        InputStream in = null;
        OutputStream out = null;
        try {
            in = assetManager.open(fromAssetPath);
            new File(toPath).createNewFile();
            out = new FileOutputStream(toPath);
            copyFile(in, out);
            in.close();
            in = null;
            out.flush();
            out.close();
            out = null;
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private static void copyFile(InputStream in, OutputStream out) throws IOException {
        byte[] buffer = new byte[1024];
        int read;
        while ((read = in.read(buffer)) != -1) {
            out.write(buffer, 0, read);
        }
    }
}
