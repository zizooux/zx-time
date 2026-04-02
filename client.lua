-- zx code
RegisterCommand("zx-showtime", function()
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "zx-show" })
end)


RegisterNUICallback("zx-show", function(data, cb)
    print("zx UI activated")
    cb("ok")
end)
