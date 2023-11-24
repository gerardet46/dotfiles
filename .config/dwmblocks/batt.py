#!/usr/bin/env python3
#
# Copyright (C) 2016 James Murphy
# Licensed under the GPL version 2 only
#
# A battery indicator blocklet script for i3blocks

from subprocess import check_output

status = check_output(['acpi'], universal_newlines=True)

batticons = ["\uf240", "\uf241", "\uf242", "\uf243", "\uf244"]

if not status:
    # stands for no battery found
    # fulltext = "<span color='red'><span font='FontAwesome'>\uf00d \uf240</span></span>"
    fulltext = "^c#ff0000^\uf00d \uf240"
    percentleft = 100
else:
    # if there is more than one battery in one laptop, the percentage left is 
    # available for each battery separately, although state and remaining 
    # time for overall block is shown in the status of the first battery 
    batteries = status.split("\n")
    state_batteries=[]
    commasplitstatus_batteries=[]
    percentleft_batteries=[]
    for battery in batteries:
        if battery!='':
            state_batteries.append(battery.split(": ")[1].split(", ")[0])
            commasplitstatus = battery.split(", ")
            percentleft_batteries.append(int(commasplitstatus[1].rstrip("%\n")))
            commasplitstatus_batteries.append(commasplitstatus)
    state = state_batteries[0]
    commasplitstatus = commasplitstatus_batteries[0]
    percentleft = int(sum(percentleft_batteries)/len(percentleft_batteries))
    # stands for charging
    # FA_LIGHTNING = "<span color='yellow'><span font='FontAwesome'>\uf0e7</span></span>"
    FA_LIGHTNING = "^c#ffff00^\uf0e7"

    # stands for plugged in
    # FA_PLUG = "<span font='FontAwesome'>\uf1e6</span>"
    FA_PLUG = "^c#eeeeee^\uf1e6"

    fulltext = ""
    timeleft = ""

    if state == "Discharging":
        time = commasplitstatus[-1].split()[0]
        time = ":".join(time.split(":")[0:2])
        timeleft = " ({})".format(time)
    elif state == "Full":
        fulltext = FA_PLUG + " "
    elif state == "Unknown":
        # fulltext = "<span font='FontAwesome'>\uf128</span> "
        fulltext = "\uf128 "
    else:
        fulltext = FA_LIGHTNING + " " + FA_PLUG + " "

    def color(percent):
        if percent < 15:
            return "#FF3300"
        if percent < 30:
            return "#FF6600"
        if percent < 40:
            return "#FF9900"
        if percent < 50:
            return "#FFCC00"
        if percent < 60:
            return "#FFFF00"
        if percent < 70:
            return "#FFFF33"
        if percent < 80:
            return "#FFFF66"
        return "#F8F8F2"

    def batt_icon(percent):
        if percent < 15:
            # exit code 33 will turn background red
            return batticons[4]
        if percent < 40:
            return batticons[3]
        if percent < 60:
            return batticons[2]
        if percent < 80:
            return batticons[1]
        return batticons[0]

    # form =  '<span color="{}">{}%</span>'
    # fulltext += form.format(color(percentleft), percentleft)
    # fulltext += timeleft
    fulltext += "^c" + color(percentleft) + "^"
    if state == "Discharging":
        fulltext += batt_icon(percentleft) + " "
        
    fulltext += str(percentleft) + "%" + timeleft

print(fulltext)
if percentleft < 10:
    exit(33)
