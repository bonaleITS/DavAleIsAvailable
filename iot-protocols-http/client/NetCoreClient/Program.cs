using System;
using NetCoreClient.Sensors;
using NetCoreClient.Protocols;

// define sensors
List<ISensorInterface> sensors = new();
sensors.Add(new VirtualSpeedSensor());
sensors.Add(new VirtualPositionSensor());

// define protocol
// IProtocolInterface protocol = new Http("http://localhost:8011/drones/1/status");
IProtocolInterface protocol = new Http("http://192.168.101.39:8011/drones/1/status");

// send data to server
while (true)
{
    foreach (ISensorInterface sensor in sensors)                // Le interfacce evitano la creazione di una lista infinita sensori (VirtualSpeedSensore, 
                                                                // VirtualPositionSensor,...).
                                                                // Così si può fare solo una lista di ISensorInterface, che garantisce la presenza del 
                                                                // metodo ToJson
    {
        var sensorValue = sensor.ToJson();                      // sensor non si sa che tipo di sensore sia, però 
                                                                // avrà di sicuro un metodo ToJson, siccome fa parte dell'interfaccia

        protocol.Send(sensorValue);                             // Stessa cosa per i protocolli: non si sa che protocollo viene utilizzato di volta in volata, 
                                                                // tuttavia c'è sempre un metodo Send che invia dei dati

        Console.WriteLine("Data sent: " + sensorValue);

        Thread.Sleep(1000);
    }
}